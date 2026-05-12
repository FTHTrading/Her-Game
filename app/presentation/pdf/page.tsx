import Image from 'next/image'
import Link from 'next/link'
import { slides } from '@/data/slideContent'

export const metadata = {
  title: 'Presentation PDF View — HER GAME',
}

export default function PresentationPdfPage() {
  return (
    <main className="bg-white text-black min-h-screen print:bg-white">
      <div className="max-w-5xl mx-auto px-6 py-8 print:max-w-none print:px-0">
        <div className="mb-6 flex items-center justify-between gap-4 print:hidden">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">HER GAME</p>
            <h1 className="text-3xl font-bold tracking-wide">PDF Presentation View</h1>
          </div>
          <div className="flex gap-3">
            <Link
              href="/presentation"
              className="px-4 py-2 text-xs uppercase tracking-widest rounded-sm border border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              Back to Outline
            </Link>
          </div>
        </div>

        <div className="mb-6 rounded-md border border-zinc-300 bg-zinc-50 px-4 py-3 print:hidden">
          <p className="text-sm text-zinc-700">
            Use your browser print command to save this page as a PDF. Each slide is already formatted for printing.
          </p>
        </div>

        <div className="space-y-8 print:space-y-0">
          {slides.map((slide) => (
            <section
              key={slide.num}
              className="break-after-page border border-zinc-300 rounded-md overflow-hidden bg-white shadow-sm print:shadow-none print:rounded-none print:border-black"
            >
              <div className="flex items-center justify-between border-b border-zinc-300 px-4 py-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">Slide {slide.num} of 11</p>
                  <h2 className="text-xl font-bold tracking-wide text-black">{slide.title}</h2>
                </div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">HER GAME</p>
              </div>

              <div className="grid grid-cols-2 min-h-[540px]">
                <div className="relative bg-black">
                  <Image src={slide.image} alt={slide.imageAlt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/45" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-yellow-300 mb-2">{slide.subheading}</p>
                    <h3 className="text-3xl font-bold tracking-wider mb-4">{slide.heading}</h3>
                    <ul className="space-y-2">
                      {slide.bullets.slice(0, 5).map((bullet) => (
                        <li key={bullet} className="text-sm flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-300 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {slide.extraContent && (
                      <div className="mt-4 space-y-2">
                        {slide.extraContent.map((item) => (
                          <div key={item} className="rounded-sm border border-zinc-700 bg-black/40 px-3 py-2 text-[11px] text-zinc-200">
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-2">Speaker Notes</p>
                    <p className="text-sm leading-6 text-zinc-900">{slide.speakerNote}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-2">Image Suggestion</p>
                    <p className="text-sm text-zinc-700">{slide.imageAlt}</p>
                  </div>
                  <div className="mt-auto rounded-md border border-zinc-300 p-4">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-2">Presentation Rules</p>
                    <ul className="space-y-1 text-sm text-zinc-800">
                      <li>PG rated</li>
                      <li>Max 5 bullets per slide</li>
                      <li>Max 5 words per bullet</li>
                      <li>School safe demo only</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
