export interface RAGEntry {
  id: string
  category: string
  question: string
  answer: string
}

export const ragKnowledgeBase: RAGEntry[] = [
  {
    id: 'kb-001',
    category: 'Products',
    question: 'What sports does HER GAME make pendants for?',
    answer:
      'HER GAME makes pendants for Soccer, Basketball, Tennis, Softball, Volleyball, Track, Boxing, Golf, Lacrosse, Swimming, Mountain Biking, Rowing, Field Hockey, Wrestling, Rock Climbing, and Archery.',
  },
  {
    id: 'kb-002',
    category: 'Pricing',
    question: 'How much do the pendants cost?',
    answer:
      'Basic pendants start at $24.99. Premium pendants go up to $49.99. Gift bundles (2–3 pendants) are $89.99. Team orders of 10 or more get a discount. These are example demo prices.',
  },
  {
    id: 'kb-003',
    category: 'Materials',
    question: 'What are the pendants made of?',
    answer:
      'Pendants come in three finishes: Brushed Silver (stainless steel), Metallic Gold (gold-plated), and Gunmetal (dark coated metal). All are nickel-safe and on a stainless chain. This is a demo product concept.',
  },
  {
    id: 'kb-004',
    category: 'Sport Form',
    question: 'What makes these pendants different?',
    answer:
      'Each pendant shows a female athlete performing the correct form for her sport — not a generic figure. The designs are athletic and powerful, not cartoonish or overly girly.',
  },
  {
    id: 'kb-005',
    category: 'Gifts',
    question: 'Are these good team gifts?',
    answer:
      'Yes! HER GAME offers team orders with discounts. Coaches can order matching pendants for their whole squad. Gift bundles come in branded boxes ready to give.',
  },
  {
    id: 'kb-006',
    category: 'Safety',
    question: 'Is this website safe for students?',
    answer:
      'Yes. This is a 7th grade school project demo. No real purchases can be made. No personal student data is collected. All content is school-safe and PG rated.',
  },
  {
    id: 'kb-007',
    category: 'Brand',
    question: 'What is the HER GAME brand about?',
    answer:
      'HER GAME is about precision, strength, and sport pride. The tagline is "Form. Focus. Force." The brand celebrates female athletes of all sports with powerful, premium jewelry.',
  },
  {
    id: 'kb-008',
    category: 'Sizing',
    question: 'How big are the pendants?',
    answer:
      'Standard pendants are about 1 inch tall. Premium pendants are about 1.5 inches. All come on an 18-inch stainless steel chain with an adjustable extender. These are example dimensions for the demo.',
  },
  {
    id: 'kb-009',
    category: 'Customization',
    question: 'Can I get a custom sport pendant?',
    answer:
      'In this demo concept, the AI assistant could help you describe your sport and form. A real custom order system would require direct contact with the brand. This is a demo only.',
  },
  {
    id: 'kb-010',
    category: 'FAQs',
    question: 'Who is HER GAME made for?',
    answer:
      'HER GAME is for female athletes of all levels — from middle school to high school and beyond. It is also for sports parents, coaches, and fans who want to celebrate athletic achievement.',
  },
]

export const mcpTools = [
  {
    name: 'searchProducts()',
    description: 'Searches the pendant collection by sport name or finish type.',
    example: 'searchProducts("tennis") → returns Tennis pendant card',
    safe: true,
  },
  {
    name: 'recommendPendant()',
    description: 'Recommends a pendant based on sport, price range, and finish preference.',
    example: 'recommendPendant({sport:"soccer", budget:"under $30"}) → Silver Soccer Pendant',
    safe: true,
  },
  {
    name: 'explainSportForm()',
    description: 'Explains the athletic form shown on a specific pendant.',
    example: 'explainSportForm("volleyball") → Explains spike jump technique',
    safe: true,
  },
  {
    name: 'createGiftMessage()',
    description: 'Generates a school-safe gift message for a pendant purchase.',
    example: 'createGiftMessage({sport:"track", name:"Kaci"}) → "Keep running your race, Kaci!"',
    safe: true,
  },
  {
    name: 'answerFAQ()',
    description: 'Answers common questions using the RAG knowledge base.',
    example: 'answerFAQ("how much do pendants cost?") → pricing answer',
    safe: true,
  },
  {
    name: 'generateTeamBundle()',
    description: 'Builds a team gift bundle list for a coach or parent.',
    example: 'generateTeamBundle({sport:"basketball", qty:12}) → bundle options',
    safe: true,
  },
  {
    name: 'getPricingOptions()',
    description: 'Returns pricing tiers for Basic, Premium, and Bundle orders.',
    example: 'getPricingOptions() → Basic $24.99, Premium $49.99, Bundle $89.99',
    safe: true,
  },
]
