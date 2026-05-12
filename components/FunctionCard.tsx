import { MarketingFunction } from '@/data/marketingFunctions'

interface Props {
  fn: MarketingFunction
}

export default function FunctionCard({ fn }: Props) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden hover:border-yellow-700/40 transition-colors group">
      {/* Number + icon header */}
      <div className="flex items-center gap-4 p-5 border-b border-zinc-800 bg-zinc-900/50">
        <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-600/30 flex items-center justify-center text-yellow-400 font-bold text-sm flex-shrink-0">
          {fn.number}
        </div>
        <div>
          <h3 className="text-zinc-100 font-bold text-base tracking-wide">{fn.name}</h3>
          <p className="text-zinc-600 text-xs mt-0.5 italic">{fn.keyQuestion}</p>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Definition */}
        <div>
          <span className="text-zinc-500 text-xs uppercase tracking-widest block mb-1">Definition</span>
          <p className="text-zinc-300 text-sm leading-relaxed">{fn.shortDef}</p>
        </div>

        {/* How it applies */}
        <div>
          <span className="text-zinc-500 text-xs uppercase tracking-widest block mb-1">HER GAME Example</span>
          <p className="text-zinc-400 text-sm leading-relaxed">{fn.howItApplies}</p>
        </div>

        {/* Real-world example */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-3">
          <span className="text-yellow-600 text-xs uppercase tracking-widest block mb-1">In Action</span>
          <p className="text-zinc-300 text-sm italic">"{fn.example}"</p>
        </div>
      </div>
    </div>
  )
}
