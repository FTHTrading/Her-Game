import Section from '@/components/Section'
import FunctionCard from '@/components/FunctionCard'
import { marketingFunctions } from '@/data/marketingFunctions'

export const metadata = {
  title: '7 Functions of Marketing — HER GAME',
}

export default function MarketingPage() {
  return (
    <>
      {/* Page hero */}
      <div className="py-20 px-4 text-center border-b border-zinc-800">
        <p className="text-yellow-600 text-xs tracking-[0.5em] uppercase mb-3">Marketing Project</p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 uppercase mb-4">
          7 Functions
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base leading-relaxed">
          Every business uses these seven marketing functions. Below you'll see how HER GAME applies each one.
        </p>
      </div>

      {/* Quick Reference */}
      <div className="py-8 px-4 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-7 gap-2">
            {marketingFunctions.map((fn) => (
              <a
                key={fn.number}
                href={`#function-${fn.number}`}
                className="flex flex-col items-center gap-1 p-3 bg-zinc-950 border border-zinc-800 rounded-sm hover:border-yellow-700/40 transition-colors text-center group"
              >
                <span className="w-7 h-7 rounded-full bg-yellow-500/10 border border-yellow-600/20 flex items-center justify-center text-yellow-400 text-xs font-bold">{fn.number}</span>
                <span className="text-zinc-500 text-xs text-center leading-tight hidden sm:block">
                  {fn.name.split(' ')[0]}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* All 7 Functions */}
      <Section
        title="All 7 Functions"
        subtitle="How HER GAME uses each marketing function to build a successful brand."
        accent
      >
        <div className="space-y-8">
          {marketingFunctions.map((fn) => (
            <div key={fn.number} id={`function-${fn.number}`}>
              <FunctionCard fn={fn} />
            </div>
          ))}
        </div>
      </Section>

      {/* Summary table */}
      <Section title="Quick Summary" subtitle="All 7 functions at a glance." className="bg-zinc-950/50">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="text-left py-3 px-4 text-yellow-500 font-bold tracking-widest uppercase text-xs">
                  #
                </th>
                <th className="text-left py-3 px-4 text-yellow-500 font-bold tracking-widest uppercase text-xs">
                  Function
                </th>
                <th className="text-left py-3 px-4 text-yellow-500 font-bold tracking-widest uppercase text-xs">
                  Key Question
                </th>
                <th className="text-left py-3 px-4 text-yellow-500 font-bold tracking-widest uppercase text-xs hidden md:table-cell">
                  HER GAME Example
                </th>
              </tr>
            </thead>
            <tbody>
              {marketingFunctions.map((fn) => (
                <tr key={fn.number} className="border-b border-zinc-900 hover:bg-zinc-900/50 transition-colors">
                  <td className="py-3 px-4 text-yellow-600 font-bold">{fn.number}</td>
                  <td className="py-3 px-4 text-zinc-200 font-semibold">{fn.name}</td>
                  <td className="py-3 px-4 text-zinc-400 italic text-xs">{fn.keyQuestion}</td>
                  <td className="py-3 px-4 text-zinc-500 text-xs hidden md:table-cell">{fn.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  )
}
