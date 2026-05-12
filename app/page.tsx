import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Link from 'next/link'
import Image from 'next/image'
import { pendants } from '@/data/pendants'
import { marketingFunctions } from '@/data/marketingFunctions'

const sports = pendants.map((p) => ({ sport: p.sport }))

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* What is HER GAME */}
      <Section
        title="What Is HER GAME?"
        subtitle="A premium sports pendant collection designed specifically for female athletes."
        accent
      >
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: 'Sport-Specific Design',
              label: '01',
              body: 'Each pendant shows a female athlete performing the correct form for her sport, not a generic figure.',
            },
            {
              title: 'Athletic & Powerful',
              label: '02',
              body: 'HER GAME is strong, focused, and premium like the athletes it represents.',
            },
            {
              title: 'Precision Crafted',
              label: '03',
              body: 'Three finishes: Metallic Gold, Brushed Silver, and Gunmetal.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-zinc-950 border border-zinc-800 rounded-sm p-6 text-center hover:border-yellow-700/40 transition-colors"
            >
                <div className="w-12 h-12 mx-auto mb-4 rounded-sm bg-yellow-500/10 border border-yellow-600/20 flex items-center justify-center">
                  <span className="text-yellow-400 font-display font-bold text-sm tracking-wider">{item.label}</span>
                </div>
              <h3 className="text-yellow-400 font-bold tracking-wide mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why it matters */}
      <Section
        title="Why It Matters"
        subtitle="Female athletes deserve jewelry that looks as serious as they are."
        className="bg-zinc-950/50"
      >
        <div className="grid sm:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {[
              'Most sports jewelry looks generic or too cutesy.',
              'Female athletes want to be seen as strong and skilled.',
              'HER GAME shows the actual form and focus of the sport.',
              'Pendants work as team gifts, personal rewards, and sports pride.',
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-300 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="relative rounded-sm overflow-hidden border border-zinc-800">
            <Image
              src="/images/her-game-9.png"
              alt="HER GAME athlete pendants"
              width={600}
              height={600}
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-zinc-300 text-base leading-relaxed italic font-light">
                "Precision pendants for serious competitors."
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Sports */}
      <Section
        title="All 16 Sports"
        subtitle="One pendant for every athlete. Designed around perfect form."
        accent
      >
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
          {sports.map((s) => (
            <Link
              key={s.sport}
              href="/collection"
              className="flex flex-col items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-sm p-3 hover:border-yellow-700/40 hover:bg-zinc-900/70 transition-all group"
            >
                <span className="text-zinc-300 text-xs uppercase tracking-wider text-center leading-tight font-semibold group-hover:text-yellow-400 transition-colors">
                {s.sport}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:border-yellow-600/50 hover:text-yellow-400 transition-colors text-sm tracking-widest uppercase rounded-sm"
          >
            View Full Collection →
          </Link>
        </div>
      </Section>

      {/* 7 Functions Preview */}
      <Section
        title="7 Functions of Marketing"
        subtitle="Every good business understands these seven marketing basics."
        className="bg-zinc-950/50"
      >
        <div className="grid sm:grid-cols-7 gap-2">
          {marketingFunctions.map((fn) => (
            <Link
              key={fn.number}
              href="/marketing"
              className="flex flex-col items-center gap-2 p-4 bg-zinc-900 border border-zinc-800 rounded-sm hover:border-yellow-700/40 transition-colors text-center group"
            >
                <span className="w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-600/20 flex items-center justify-center text-yellow-400 font-bold text-xs">{fn.number}</span>
              <span className="text-zinc-400 text-xs text-center leading-tight">{fn.name}</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/marketing"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:border-yellow-600/50 hover:text-yellow-400 transition-colors text-sm tracking-widest uppercase rounded-sm"
          >
            Explore All 7 Functions →
          </Link>
        </div>
      </Section>

      {/* School Disclaimer */}
      <Section title="School Project Disclaimer" className="pb-8">
        <div className="max-w-2xl mx-auto bg-zinc-900 border border-zinc-700 rounded-sm p-6 text-center">
          <p className="text-yellow-500 text-sm font-bold tracking-widest uppercase mb-3">For Teachers &amp; Parents</p>
                    <p className="text-yellow-500 text-sm font-bold tracking-widest uppercase mb-3">For Teachers &amp; Parents</p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            This is a <strong className="text-zinc-100">7th grade marketing class project demo</strong> by Kaci Burns.
            The product, prices, AI features, and business details shown here are examples only.
            No real purchases can be made. No personal student data is collected or stored.
            All content is school-safe and reviewed for 7th grade appropriateness.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 justify-center">
            {['PG Rated', 'No Real Purchases', 'No Student Data', 'Demo Only'].map((tag) => (
              <span key={tag} className="text-xs bg-zinc-800 border border-zinc-700 text-zinc-400 px-3 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
