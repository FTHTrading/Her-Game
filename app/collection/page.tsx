import Section from '@/components/Section'
import PendantCard from '@/components/PendantCard'
import Image from 'next/image'
import { pendants } from '@/data/pendants'

export const metadata = {
  title: 'Collection — HER GAME Pendants',
}

export default function CollectionPage() {
  const gold = pendants.filter((p) => p.finish === 'gold')
  const silver = pendants.filter((p) => p.finish === 'silver')
  const gunmetal = pendants.filter((p) => p.finish === 'gunmetal')

  return (
    <>
      {/* Page hero */}
      <div className="py-20 px-4 text-center border-b border-zinc-800">
        <p className="text-yellow-600 text-xs tracking-[0.5em] uppercase mb-3">The Collection</p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 uppercase mb-4">
          Pendants
        </h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-base leading-relaxed">
          16 sports. 3 finishes. Every pendant designed around real athletic form.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {[
            { label: 'Gold Finish', href: '#gold' },
            { label: 'Silver Finish', href: '#silver' },
            { label: 'Gunmetal Finish', href: '#gunmetal' },
          ].map((b) => (
            <a
              key={b.label}
              href={b.href}
              className="text-xs px-4 py-2 border border-zinc-700 text-zinc-400 hover:border-yellow-600/50 hover:text-yellow-400 transition-colors rounded-sm tracking-widest uppercase"
            >
              {b.label}
            </a>
          ))}
        </div>
      </div>

      {/* Pricing Banner */}
      <div className="bg-zinc-900 border-b border-zinc-800 py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
          {[
            { tier: 'Basic', price: '$24.99', desc: 'Single pendant, standard box' },
            { tier: 'Premium', price: '$49.99', desc: 'Single pendant, premium box + charm' },
            { tier: 'Bundle', price: '$89.99', desc: '2–3 pendants, gift box set' },
          ].map((p) => (
            <div key={p.tier} className="text-center">
              <p className="text-zinc-500 text-xs tracking-widest uppercase">{p.tier}</p>
              <p className="text-yellow-400 text-2xl font-bold">{p.price}</p>
              <p className="text-zinc-500 text-xs">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-zinc-700 text-xs mt-3">Demo prices — school project only. No real purchases.</p>
      </div>

      {/* Gold Collection */}
      <Section id="gold" title="Gold Finish" subtitle="Warm metallic gold — for the athlete who leads the pack." accent>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gold.map((p) => (
            <PendantCard key={p.sport} pendant={p} />
          ))}
        </div>
      </Section>

      {/* Silver Collection */}
      <Section id="silver" title="Silver Finish" subtitle="Brushed silver — clean, sharp, and competition-ready." className="bg-zinc-950/50">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {silver.map((p) => (
            <PendantCard key={p.sport} pendant={p} />
          ))}
        </div>
      </Section>

      {/* Gunmetal Collection */}
      <Section id="gunmetal" title="Gunmetal Finish" subtitle="Dark coated gunmetal — bold, tough, and built for the game." accent>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gunmetal.map((p) => (
            <PendantCard key={p.sport} pendant={p} />
          ))}
        </div>
      </Section>

      {/* Team orders CTA */}
      <div className="relative overflow-hidden border-t border-zinc-800">
        <Image
          src="/images/her-game-10.png"
          alt="HER GAME team collection"
          width={1200}
          height={500}
          className="w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-t from-black/90 via-black/60 to-black/40 py-16">
          <h2 className="text-2xl font-bold text-zinc-100 tracking-wide mb-3">Team Orders</h2>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto mb-6">
            Coaches and parents can order pendants for a whole team. Orders of 10 or more get a team discount.
            Gift boxes available for end-of-season awards.
          </p>
          <div className="inline-block bg-black/60 backdrop-blur border border-yellow-700/30 rounded-sm px-6 py-4">
            <p className="text-yellow-400 font-bold">10+ pendants = Team Pricing</p>
            <p className="text-zinc-500 text-xs mt-1">Contact via the demo form — school project concept only</p>
          </div>
        </div>
      </div>
    </>
  )
}
