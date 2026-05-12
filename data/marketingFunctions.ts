export interface MarketingFunction {
  number: number
  name: string
  shortDef: string
  howItApplies: string
  example: string
  keyQuestion: string
}

export const marketingFunctions: MarketingFunction[] = [
  {
    number: 1,
    name: 'Product Management',
    shortDef: 'Designing, developing, and improving a product so customers love it.',
    howItApplies:
      'HER GAME creates metal pendants showing real athletic form. Each pendant is designed for a specific sport. The company can improve by adding new sports and new finishes.',
    example: 'Adding a new Archery pendant based on customer requests.',
    keyQuestion: 'What is the product and how can it get better?',
  },
  {
    number: 2,
    name: 'Market Planning',
    shortDef: 'Figuring out who your customers are and how to reach them.',
    howItApplies:
      'HER GAME targets female athletes ages 10–18, their parents, coaches, and team gift buyers. The brand uses sports events, school teams, and online stores to reach them.',
    example: 'Selling pendant bundles at regional soccer tournaments.',
    keyQuestion: 'Who are we selling to and where do they shop?',
  },
  {
    number: 3,
    name: 'Selling',
    shortDef: 'Connecting with customers and helping them make a purchase.',
    howItApplies:
      'HER GAME sells through an online store, team orders, sports events, and gift bundles. Customer service answers questions fast and makes ordering easy.',
    example: 'A coach orders 12 volleyball pendants as end-of-season gifts.',
    keyQuestion: 'How do customers buy and how do we help them?',
  },
  {
    number: 4,
    name: 'Distribution',
    shortDef: 'Getting the product from the maker to the customer.',
    howItApplies:
      'Pendants are designed by HER GAME, made by a jewelry manufacturer, packaged in branded boxes, and shipped directly to customers or sold at sports events.',
    example: 'A pendant ordered online ships within 3 business days.',
    keyQuestion: 'How does the product get from us to the customer?',
  },
  {
    number: 5,
    name: 'Marketing Information Management',
    shortDef: 'Collecting and using information to make better business decisions.',
    howItApplies:
      'HER GAME uses customer surveys, product reviews, website clicks, and sport popularity data to decide which pendants to make next and which sports need better designs.',
    example: 'Customers rate Tennis pendant 5 stars — company makes a Pro version.',
    keyQuestion: 'What data helps us sell smarter?',
  },
  {
    number: 6,
    name: 'Pricing',
    shortDef: 'Setting prices that are fair for customers and profitable for the business.',
    howItApplies:
      'HER GAME offers three price levels: Basic ($24.99), Premium ($49.99), and Bundles ($89.99). Prices depend on metal type, detail level, and packaging quality.',
    example: 'A gold-plated premium pendant costs more than a basic silver one.',
    keyQuestion: 'How much should the product cost and why?',
  },
  {
    number: 7,
    name: 'Promotion',
    shortDef: 'Spreading the word about a product so people want to buy it.',
    howItApplies:
      'HER GAME promotes through social media, short sport videos, team posters, athlete influencers, and gift campaigns. The message always focuses on strength and sport pride.',
    example: 'A TikTok video shows a soccer player wearing the pendant at game day.',
    keyQuestion: 'How do people find out about HER GAME?',
  },
]
