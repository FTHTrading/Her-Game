export interface PresentationSlide {
  num: number
  title: string
  heading: string
  subheading: string
  bullets: string[]
  image: string
  imageAlt: string
  speakerNote: string
  extraContent?: string[]
}

export const slides: PresentationSlide[] = [
  {
    num: 1,
    title: 'Title Slide',
    heading: 'HER GAME',
    subheading: 'Precision Athlete Pendants',
    bullets: ['HER GAME', 'Sports pendant collection', 'By Kaci Burns'],
    image: '/images/her-game-8.png',
    imageAlt: 'HER GAME brand poster with athletes and pendants',
    speakerNote:
      'My project is about HER GAME, a sports pendant collection for female athletes. I will walk through all 7 marketing functions using this brand.',
  },
  {
    num: 2,
    title: '7 Functions Overview',
    heading: '7 Functions of Marketing',
    subheading: 'The foundation of every business',
    bullets: [
      'Product / Market Planning',
      'Selling',
      'Distribution',
      'Information Management',
      'Pricing / Promotion',
    ],
    image: '/images/her-game-1.png',
    imageAlt: 'HER GAME brand overview',
    speakerNote:
      'These are the seven marketing functions I will explain: product management, market planning, selling, distribution, marketing information management, pricing, and promotion.',
  },
  {
    num: 3,
    title: 'Product Management',
    heading: 'Product Management',
    subheading: 'What is the product and how can it improve?',
    bullets: [
      'Sports necklace pendants',
      'Shows perfect athletic form',
      'Physical good',
      'Solves boring jewelry',
      'New sport designs',
    ],
    image: '/images/her-game-2.png',
    imageAlt: 'HER GAME pendant collection',
    speakerNote:
      'HER GAME is a physical product. It is a necklace pendant collection. The pendants show strong female athletes using good sports form. It solves the problem that many sports necklaces look too generic or too childish. The company can improve by adding new sports and listening to customer requests.',
  },
  {
    num: 4,
    title: 'Market Planning',
    heading: 'Market Planning',
    subheading: 'Who are our customers?',
    bullets: [
      'Girls ages 10–18',
      'Female athletes',
      'Sports parents',
      'Middle-income families',
      'Coaches and teams',
    ],
    image: '/images/her-game-9.png',
    imageAlt: 'HER GAME target market athletes',
    speakerNote:
      'The target market is mostly girls who play sports. Parents, coaches, and teams may also buy the pendants as gifts. The product is priced for middle-income families.',
  },
  {
    num: 5,
    title: 'Selling',
    heading: 'Selling',
    subheading: 'How do customers buy?',
    bullets: [
      'Retail sports shops',
      'Online store',
      'Team orders',
      'Personal gift sales',
      'Customer support',
    ],
    image: '/images/her-game-3.png',
    imageAlt: 'HER GAME selling strategy',
    speakerNote:
      'HER GAME can sell through retail stores, online, team orders, and personal gift sales. Customer service can help with orders, returns, and sport requests.',
  },
  {
    num: 6,
    title: 'Distribution',
    heading: 'Distribution',
    subheading: 'How does the product reach customers?',
    bullets: [
      'Manufacturer makes pendants',
      'Warehouse receives boxes',
      'Website lists products',
      'Orders ship to customers',
      'Stores sell locally',
    ],
    image: '/images/her-game-5.png',
    imageAlt: 'HER GAME distribution flow',
    speakerNote:
      'HER GAME pendants would be made by a jewelry manufacturer. Then they would be sent to a warehouse or retail store. Customers could buy them online or in stores. Online orders would ship directly to the customer.',
  },
  {
    num: 7,
    title: 'Marketing Information Management',
    heading: 'Marketing Information Management',
    subheading: 'How do we learn from customers?',
    bullets: [
      'Customer surveys',
      'Sport popularity',
      'Website clicks',
      'Product reviews',
      'Team rewards',
    ],
    image: '/images/her-game-chatgpt.png',
    imageAlt: 'HER GAME information management',
    speakerNote:
      'HER GAME can collect information from surveys, product reviews, website clicks, and customer feedback. This helps the company know which sports and designs customers want most.',
  },
  {
    num: 8,
    title: 'Pricing',
    heading: 'Pricing',
    subheading: 'What do pendants cost and why?',
    bullets: [
      'Basic: $24.99',
      'Premium: $49.99',
      'Bundles: $89.99',
      'Materials affect price',
      'Team discounts offered',
    ],
    image: '/images/her-game-10.png',
    imageAlt: 'HER GAME pricing tiers',
    speakerNote:
      'Prices depend on the material, design detail, packaging, and whether the customer buys one pendant or a bundle. Team discounts can encourage larger orders.',
  },
  {
    num: 9,
    title: 'Promotion',
    heading: 'Promotion',
    subheading: 'How do people find out about HER GAME?',
    bullets: [
      'Social media ads',
      'Team posters',
      'Short videos',
      'Gift campaigns',
      'Athlete ambassadors',
    ],
    image: '/images/her-game-11.png',
    imageAlt: 'HER GAME promotion strategy',
    speakerNote:
      'For a broadcast ad, HER GAME could use a short video commercial called "Built for Athletes." This would be a persuade ad because it encourages customers to buy. For a print ad, HER GAME could use a pendant poster with the tagline FORM. FOCUS. FORCE. This is also a persuade ad.',
    extraContent: [
      'Demo commercial: HER GAME short video',
      'Ad type: Persuade',
      'Print ad: Pendant poster',
      'Ad type: Persuade',
      'Demo link: /commercial',
    ],
  },
  {
    num: 10,
    title: 'References',
    heading: 'References',
    subheading: 'Sources used for this project',
    bullets: [
      'Teacher project sheet',
      'Marketing class notes',
      'Jewelry examples',
      'Sports form research',
      'Demo ad images',
    ],
    image: '/images/her-game-1.png',
    imageAlt: 'Simple references graphic',
    speakerNote:
      'These are the sources used for my project. The commercial and print ad were created as demo examples for this school project. Since HER GAME is a demo product, some product details are examples made for the assignment.',
  },
  {
    num: 11,
    title: 'Closing',
    heading: 'HER GAME',
    subheading: 'Form. Focus. Force.',
    bullets: [
      'HER GAME',
      'Form. Focus. Force.',
      'Built for athletes',
      'Strong sports identity',
      'Thank you',
    ],
    image: '/images/her-game-8.png',
    imageAlt: 'HER GAME closing slide',
    speakerNote:
      'HER GAME helps female athletes feel strong, focused, and proud of their sport. Thank you for watching my presentation.',
  },
]
