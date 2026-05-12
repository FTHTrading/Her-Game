// Run: node scripts/generate-pptx.js
const PptxGenJS = require('pptxgenjs')
const path = require('path')
const fs = require('fs')

const slides = [
  {
    num: 1, heading: 'HER GAME', subheading: 'Precision Athlete Pendants',
    bullets: ['HER GAME', 'Sports pendant collection', 'By Kaci Burns'],
    image: '/images/her-game-8.png',
    speakerNote: 'My project is about HER GAME, a sports pendant collection for female athletes. I will walk through all 7 marketing functions using this brand.',
  },
  {
    num: 2, heading: '7 Functions of Marketing', subheading: 'The foundation of every business',
    bullets: ['Product / Market Planning', 'Selling', 'Distribution', 'Information Management', 'Pricing / Promotion'],
    image: '/images/her-game-1.png',
    speakerNote: 'These are the seven marketing functions I will explain: product management, market planning, selling, distribution, marketing information management, pricing, and promotion.',
  },
  {
    num: 3, heading: 'Product Management', subheading: 'What is the product and how can it improve?',
    bullets: ['Sports necklace pendants', 'Shows perfect athletic form', 'Physical good', 'Solves boring jewelry', 'New sport designs'],
    image: '/images/her-game-2.png',
    speakerNote: 'HER GAME is a physical product. It is a necklace pendant collection. The pendants show strong female athletes using good sports form. It solves the problem that many sports necklaces look too generic or too childish. The company can improve by adding new sports and listening to customer requests.',
  },
  {
    num: 4, heading: 'Market Planning', subheading: 'Who are our customers?',
    bullets: ['Girls ages 10-18', 'Female athletes', 'Sports parents', 'Middle-income families', 'Coaches and teams'],
    image: '/images/her-game-9.png',
    speakerNote: 'The target market is mostly girls who play sports. Parents, coaches, and teams may also buy the pendants as gifts. The product is priced for middle-income families.',
  },
  {
    num: 5, heading: 'Selling', subheading: 'How do customers buy?',
    bullets: ['Retail sports shops', 'Online store', 'Team orders', 'Personal gift sales', 'Customer support'],
    image: '/images/her-game-3.png',
    speakerNote: 'HER GAME can sell through retail stores, online, team orders, and personal gift sales. Customer service can help with orders, returns, and sport requests.',
  },
  {
    num: 6, heading: 'Distribution', subheading: 'How does the product reach customers?',
    bullets: ['Manufacturer makes pendants', 'Warehouse receives boxes', 'Website lists products', 'Orders ship to customers', 'Stores sell locally'],
    image: '/images/her-game-5.png',
    speakerNote: 'HER GAME pendants would be made by a jewelry manufacturer. Then they would be sent to a warehouse or retail store. Customers could buy them online or in stores. Online orders would ship directly to the customer.',
  },
  {
    num: 7, heading: 'Marketing Information Management', subheading: 'How do we learn from customers?',
    bullets: ['Customer surveys', 'Sport popularity', 'Website clicks', 'Product reviews', 'Team rewards'],
    image: '/images/her-game-chatgpt.png',
    speakerNote: 'HER GAME can collect information from surveys, product reviews, website clicks, and customer feedback. This helps the company know which sports and designs customers want most.',
  },
  {
    num: 8, heading: 'Pricing', subheading: 'What do pendants cost and why?',
    bullets: ['Basic: $24.99', 'Premium: $49.99', 'Bundles: $89.99', 'Materials affect price', 'Team discounts offered'],
    image: '/images/her-game-10.png',
    speakerNote: 'Prices depend on the material, design detail, packaging, and whether the customer buys one pendant or a bundle. Team discounts can encourage larger orders.',
  },
  {
    num: 9, heading: 'Promotion', subheading: 'How do people find out about HER GAME?',
    bullets: ['Social media ads', 'Team posters', 'Short videos', 'Gift campaigns', 'Athlete ambassadors'],
    image: '/images/her-game-11.png',
    speakerNote: 'For a broadcast ad, HER GAME could use a short video commercial called "Built for Athletes." This would be a persuade ad because it encourages customers to buy. For a print ad, HER GAME could use a pendant poster with the tagline FORM. FOCUS. FORCE. This is also a persuade ad.',
    extraContent: [
      'Demo commercial: HER GAME short video',
      'Ad type: Persuade',
      'Print ad: Pendant poster',
      'Ad type: Persuade',
      'Demo link: /commercial',
    ],
  },
  {
    num: 10, heading: 'References', subheading: 'Sources used for this project',
    bullets: ['Teacher project sheet', 'Marketing class notes', 'Jewelry examples', 'Sports form research', 'Demo ad images'],
    image: '/images/her-game-1.png',
    speakerNote: 'These are the sources used for my project. The commercial and print ad were created as demo examples for this school project. Since HER GAME is a demo product, some product details are examples made for the assignment.',
  },
  {
    num: 11, heading: 'HER GAME', subheading: 'Form. Focus. Force.',
    bullets: ['HER GAME', 'Form. Focus. Force.', 'Built for athletes', 'Strong sports identity', 'Thank you'],
    image: '/images/her-game-8.png',
    speakerNote: 'HER GAME helps female athletes feel strong, focused, and proud of their sport. Thank you for watching my presentation.',
  },
]

async function generate() {
  const pptx = new PptxGenJS()
  pptx.layout = 'LAYOUT_WIDE'
  pptx.author = 'Kaci Burns'
  pptx.company = 'HER GAME'
  pptx.title = 'HER GAME Presentation'

  const imgPath = (img) => path.join(process.cwd(), 'public', img.replace(/^\//, ''))

  slides.forEach((slide) => {
    const s = pptx.addSlide()
    s.background = { color: '0A0A0A' }

    s.addText(slide.heading, {
      x: 0.6, y: 0.4, w: 6.4, h: 0.6,
      fontFace: 'Arial', fontSize: 26, bold: true, color: 'F3D06B',
    })

    s.addText(slide.subheading, {
      x: 0.6, y: 0.95, w: 6.4, h: 0.3,
      fontFace: 'Arial', fontSize: 10, color: 'C0C0C0', italic: true,
    })

    s.addImage({
      path: imgPath(slide.image),
      x: 6.9, y: 0.35, w: 5.8, h: 6.65,
      sizing: { type: 'cover', x: 6.9, y: 0.35, w: 5.8, h: 6.65 },
    })

    s.addText(
      slide.bullets.slice(0, 5).map((b) => ({ text: b, options: { bullet: { indent: 14 } } })),
      { x: 0.7, y: 1.45, w: 5.8, h: 2.6, fontFace: 'Arial', fontSize: 16, color: 'E5E7EB', paraSpaceAfter: 10, margin: 0 }
    )

    if (slide.extraContent && slide.extraContent.length > 0) {
      s.addText(slide.extraContent.join('\n'), {
        x: 0.6, y: 4.25, w: 6.0, h: 2.35,
        fontFace: 'Arial', fontSize: 11, color: 'F3D06B',
        fill: { color: '1A1A1A' },
        line: { color: 'F3D06B', width: 1 },
        margin: [6, 10, 6, 10],
        valign: 'top',
      })
    }

    s.addText('Slide ' + slide.num + ' of 11', {
      x: 0.6, y: 6.9, w: 2.2, h: 0.25,
      fontFace: 'Arial', fontSize: 9, color: '8A8A8A',
    })

    const notes = slide.extraContent
      ? slide.speakerNote + '\n\n' + slide.extraContent.join('\n')
      : slide.speakerNote
    s.addNotes(notes)
  })

  const outFile = 'HER-GAME-Presentation-FINAL-CORRECTED.pptx'
  await pptx.writeFile({ fileName: outFile })
  const stat = fs.statSync(outFile)
  console.log('SAVED:', outFile, '| Size:', (stat.size / 1048576).toFixed(1) + 'MB')
}

generate().catch((e) => { console.error(e); process.exit(1) })
