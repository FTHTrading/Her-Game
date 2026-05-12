import Section from '@/components/Section'
import Image from 'next/image'

export const metadata = {
  title: 'Business Plan — HER GAME',
}

const revenueStreams = [
  { name: 'Pendant Sales', desc: 'Single pendants sold online' },
  { name: 'Gift Bundles', desc: '2–3 pendants in a branded box' },
  { name: 'Team Orders', desc: 'Bulk discounts for coaches & teams' },
  { name: 'Custom Sport Drops', desc: 'Limited release new sport designs' },
  { name: 'Online Store Sales', desc: 'Website + marketplace listings' },
]

const targetMarket = [
  { badge: '01', label: 'Middle school athletes' },
  { badge: '02', label: 'High school athletes' },
  { badge: '03', label: 'Sports parents' },
  { badge: '04', label: 'Coaches' },
  { badge: '05', label: 'Team gift buyers' },
  { badge: '06', label: 'Female sports fans' },
]

const risks = [
  { risk: 'Competition', response: 'Stand out with sport-specific precision designs' },
  { risk: 'Manufacturing cost', response: 'Start small, grow with team orders' },
  { risk: 'Unknown brand', response: 'Build with athlete influencers and teams first' },
  { risk: 'Trend changes', response: 'Focus on timeless athletic identity, not fashion' },
]

export default function BusinessPlanPage() {
  return (
    <>
      {/* Page hero with image */}
      <div className="relative overflow-hidden border-b border-zinc-800">
        <Image
          src="/images/her-game-11.png"
          alt="HER GAME Business Plan"
          width={1200}
          height={500}
          className="w-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
        <div className="relative py-24 px-4 text-center">
          <p className="text-yellow-600 text-xs tracking-[0.5em] uppercase mb-3">Project Document</p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 uppercase mb-4">
            Business Plan
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base leading-relaxed">
            A complete business overview for HER GAME — the precision athlete pendant collection.
          </p>
        </div>
      </div>

      {/* Mission + Problem */}
      <Section title="Mission & Problem" accent>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-zinc-950 border border-yellow-700/30 rounded-sm p-6">
            <p className="text-yellow-500 text-xs uppercase tracking-widest mb-3">Mission Statement</p>
            <p className="text-zinc-100 text-lg leading-relaxed font-light">
              HER GAME helps female athletes feel <strong className="text-yellow-400">seen</strong>,{' '}
              <strong className="text-yellow-400">strong</strong>, and{' '}
              <strong className="text-yellow-400">proud</strong> of their sport.
            </p>
          </div>
          <div className="bg-zinc-950 border border-zinc-700 rounded-sm p-6">
            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-3">Problem We Solve</p>
            <p className="text-zinc-300 text-base leading-relaxed">
              Many sports necklaces look too generic, too girly, or do not show real athletic form.
              Female athletes have limited options for jewelry that actually represents their sport and skill.
            </p>
          </div>
        </div>
      </Section>

      {/* Value Proposition */}
      <Section title="Value Proposition" className="bg-zinc-950/50">
        <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-700 rounded-sm p-8 text-center">
          <p className="text-zinc-500 text-xs tracking-widest uppercase mb-4">What Makes HER GAME Different</p>
          <p className="text-zinc-100 text-xl leading-relaxed font-light">
            HER GAME creates stylish pendants that show{' '}
            <span className="text-yellow-400 font-semibold">strength</span>,{' '}
            <span className="text-yellow-400 font-semibold">focus</span>, and{' '}
            <span className="text-yellow-400 font-semibold">sport-specific form</span>.
            Not cartoon figures — real athletic precision turned into wearable art.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { label: '16', desc: 'Sports covered' },
              { label: '3', desc: 'Finish options' },
              { label: '∞', desc: 'Team gift potential' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-yellow-400 text-3xl font-bold">{stat.label}</p>
                <p className="text-zinc-500 text-xs tracking-wide">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Target Market */}
      <Section title="Target Market" subtitle="Who buys HER GAME pendants?" accent>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {targetMarket.map((t) => (
            <div
              key={t.label}
              className="bg-zinc-950 border border-zinc-800 rounded-sm p-4 text-center hover:border-yellow-700/40 transition-colors"
            >
              <div className="w-10 h-10 mx-auto mb-2 rounded-sm bg-yellow-500/10 border border-yellow-600/20 flex items-center justify-center text-yellow-400 text-xs font-bold">
                {t.badge}
              </div>
              <p className="text-zinc-300 text-xs leading-tight">{t.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Revenue Model */}
      <Section title="Revenue Model" subtitle="How HER GAME makes money." className="bg-zinc-950/50">
        <div className="grid sm:grid-cols-5 gap-4">
          {revenueStreams.map((r, i) => (
            <div key={r.name} className="bg-zinc-950 border border-zinc-800 rounded-sm p-4 text-center">
              <div className="w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-600/30 flex items-center justify-center text-yellow-400 font-bold text-xs mx-auto mb-3">
                {i + 1}
              </div>
              <p className="text-zinc-200 font-semibold text-sm mb-1">{r.name}</p>
              <p className="text-zinc-500 text-xs">{r.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Sales Channels */}
      <Section title="Sales Channels" accent>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-zinc-100 font-bold mb-4 tracking-wide">Where We Sell</h3>
            <div className="space-y-3">
              {[
                { channel: 'Online Store', detail: 'Main website — available 24/7' },
                { channel: 'Sports Events', detail: 'Tournament tables, game day booths' },
                { channel: 'Team Orders', detail: 'Direct coach/parent bulk orders' },
                { channel: 'Gift Campaigns', detail: 'Holiday and end-of-season bundles' },
              ].map((c) => (
                <div key={c.channel} className="flex items-start gap-3 bg-zinc-900 border border-zinc-800 rounded-sm p-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-zinc-200 font-semibold text-sm">{c.channel}</p>
                    <p className="text-zinc-500 text-xs">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-zinc-100 font-bold mb-4 tracking-wide">Customer Service Plan</h3>
            <div className="space-y-3">
              {[
                'Fast reply to order questions — within 24 hours',
                'Clear size and material guide on every product page',
                'Easy returns within 30 days for quality issues',
                'Team order support with dedicated contact form',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                  <p className="text-zinc-300 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section title="Pricing Strategy" className="bg-zinc-950/50">
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { tier: 'Basic', price: '$24.99', features: ['One pendant', 'Standard box', 'Silver or Gunmetal'], color: 'border-zinc-600' },
            { tier: 'Premium', price: '$49.99', features: ['One pendant', 'Premium gift box', 'Gold, Silver, or Gunmetal', 'Branded charm'], color: 'border-yellow-600/50' },
            { tier: 'Bundle', price: '$89.99', features: ['2–3 pendants', 'Luxury gift box', 'Mix finishes', 'Team card included'], color: 'border-yellow-500/30' },
          ].map((p) => (
            <div key={p.tier} className={`bg-zinc-950 border ${p.color} rounded-sm p-6 text-center`}>
              <p className="text-zinc-500 text-xs tracking-widest uppercase mb-2">{p.tier}</p>
              <p className="text-yellow-400 text-3xl font-bold mb-4">{p.price}</p>
              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="text-zinc-400 text-xs flex items-center gap-2 justify-center">
                    <span className="text-yellow-600">•</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-zinc-700 text-xs mt-4">Demo prices for school project only. No real purchases.</p>
      </Section>

      {/* Risks & Growth */}
      <Section title="Risks & Growth Plan" accent>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-zinc-100 font-bold mb-4 tracking-wide">Risks & Responses</h3>
            <div className="space-y-3">
              {risks.map((r) => (
                <div key={r.risk} className="bg-zinc-950 border border-zinc-800 rounded-sm p-4">
                  <p className="text-zinc-300 font-semibold text-sm mb-1">Risk: {r.risk}</p>
                  <p className="text-zinc-500 text-xs">{r.response}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-zinc-100 font-bold mb-4 tracking-wide">Growth Plan — Next Steps</h3>
            <div className="space-y-3">
              {[
                { step: 'Phase 1', action: 'Launch 16 core sport pendants online' },
                { step: 'Phase 2', action: 'Partner with 3–5 youth sport leagues' },
                { step: 'Phase 3', action: 'Add custom name engraving option' },
                { step: 'Phase 4', action: 'Expand to 30+ sports with community votes' },
                { step: 'Phase 5', action: 'Team store program for school sports programs' },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3 bg-zinc-900 border border-zinc-800 rounded-sm p-3">
                  <span className="text-yellow-500 text-xs font-bold bg-yellow-500/10 px-2 py-0.5 rounded-sm flex-shrink-0">
                    {s.step}
                  </span>
                  <p className="text-zinc-300 text-sm">{s.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
