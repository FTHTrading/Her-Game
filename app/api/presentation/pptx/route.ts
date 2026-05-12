import PptxGenJS from 'pptxgenjs'
import path from 'path'
import { NextResponse } from 'next/server'
import { slides } from '@/data/slideContent'

export async function GET() {
  const pptx = new PptxGenJS()
  pptx.layout = 'LAYOUT_WIDE'
  pptx.author = 'Kaci Burns'
  pptx.company = 'HER GAME'
  pptx.subject = '7 Functions of Marketing presentation'
  pptx.title = 'HER GAME Presentation'
  pptx.theme = {
    headFontFace: 'Arial',
    bodyFontFace: 'Arial',
  }

  const slideHeight = 7.5
  const imagePath = (image: string) => path.join(process.cwd(), 'public', image.replace(/^\//, ''))

  slides.forEach((slide) => {
    const pptSlide = pptx.addSlide()
    pptSlide.background = { color: '0A0A0A' }

    pptSlide.addText(slide.heading, {
      x: 0.6,
      y: 0.4,
      w: 6.4,
      h: 0.6,
      fontFace: 'Arial',
      fontSize: 26,
      bold: true,
      color: 'F3D06B',
    })

    pptSlide.addText(slide.subheading, {
      x: 0.6,
      y: 0.95,
      w: 6.4,
      h: 0.3,
      fontFace: 'Arial',
      fontSize: 10,
      color: 'C0C0C0',
      italic: true,
    })

    pptSlide.addImage({
      path: imagePath(slide.image),
      x: 6.9,
      y: 0.35,
      w: 5.8,
      h: 6.65,
      sizing: { type: 'cover', x: 6.9, y: 0.35, w: 5.8, h: 6.65 },
    })

    pptSlide.addText(slide.bullets.slice(0, 5).map((bullet) => ({ text: bullet, options: { bullet: { indent: 14 } } })), {
      x: 0.7,
      y: 1.45,
      w: 5.8,
      h: 2.6,
      fontFace: 'Arial',
      fontSize: 16,
      color: 'E5E7EB',
      breakLine: false,
      paraSpaceAfter: 10,
      margin: 0,
    })

    if (slide.extraContent && slide.extraContent.length > 0) {
      pptSlide.addText(slide.extraContent.join('\n'), {
        x: 0.6,
        y: 4.25,
        w: 6.0,
        h: 2.35,
        fontFace: 'Arial',
        fontSize: 11,
        color: 'F3D06B',
        bold: false,
        fill: { color: '1A1A1A' },
        line: { color: 'F3D06B', width: 1 },
        margin: [6, 10, 6, 10],
        valign: 'top',
      })
    }

    pptSlide.addText(`Slide ${slide.num} of 11`, {
      x: 0.6,
      y: 6.9,
      w: 2.2,
      h: 0.25,
      fontFace: 'Arial',
      fontSize: 9,
      color: '8A8A8A',
    })

    const notes = slide.extraContent ? `${slide.speakerNote}\n\n${slide.extraContent.join('\n')}` : slide.speakerNote
    pptSlide.addNotes(notes)
  })

  const buffer = (await pptx.write({ outputType: 'nodebuffer' })) as Buffer

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'Content-Disposition': 'attachment; filename="HER-GAME-Presentation.pptx"',
    },
  })
}
