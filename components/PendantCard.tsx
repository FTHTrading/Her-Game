import { Pendant } from '@/data/pendants'
import Image from 'next/image'

interface Props {
  pendant: Pendant
}

const finishStyles = {
  gold: {
    border: 'border-yellow-600/40',
    badge: 'bg-yellow-500/10 text-yellow-400 border border-yellow-600/30',
    accent: 'text-yellow-400',
    glow: 'shadow-yellow-900/20',
    frame: 'from-yellow-800/20 to-yellow-600/5',
    dot: 'bg-yellow-400',
  },
  silver: {
    border: 'border-zinc-500/40',
    badge: 'bg-zinc-500/10 text-zinc-300 border border-zinc-500/30',
    accent: 'text-zinc-200',
    glow: 'shadow-zinc-800/20',
    frame: 'from-zinc-700/20 to-zinc-500/5',
    dot: 'bg-zinc-300',
  },
  gunmetal: {
    border: 'border-slate-600/40',
    badge: 'bg-slate-700/20 text-slate-300 border border-slate-600/30',
    accent: 'text-slate-200',
    glow: 'shadow-slate-900/30',
    frame: 'from-slate-800/20 to-slate-600/5',
    dot: 'bg-slate-400',
  },
}

export default function PendantCard({ pendant }: Props) {
  const s = finishStyles[pendant.finish]

  return (
    <div
      className={`relative bg-zinc-950 border ${s.border} rounded-sm overflow-hidden shadow-lg ${s.glow} hover:scale-[1.02] transition-transform duration-200 group`}
    >
      {/* Top gradient accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${s.frame}`} />

      {/* Photo or emoji illustration area */}
      <div className="relative overflow-hidden h-52 bg-gradient-to-b from-zinc-900 to-zinc-950 group">
        {pendant.photo ? (
          <>
            <Image
              src={pendant.photo}
              alt={`${pendant.sport} — HER GAME pendant`}
              fill
              className="object-cover object-top opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-300"
            />
            {/* gradient overlay so text stays readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
              <span className={`text-5xl font-bold font-display tracking-widest opacity-30 uppercase ${s.accent}`}>
                {pendant.sport.slice(0, 2).toUpperCase()}
              </span>
          </div>
        )}
        {/* Finish badge */}
        <span className={`absolute top-3 right-3 text-xs px-2 py-0.5 rounded-sm uppercase tracking-widest font-semibold ${s.badge}`}>
          {pendant.finish}
        </span>
      </div>

      <div className="p-5">
        {/* Sport name */}
        <h3 className={`text-xl font-bold tracking-widest uppercase ${s.accent} mb-1`}>
          {pendant.sport}
        </h3>

        {/* Concept */}
        <p className="text-zinc-300 text-sm font-semibold mb-3">{pendant.concept}</p>

        {/* Form focus */}
        <div className="mb-3">
          <span className="text-zinc-600 text-xs uppercase tracking-widest block mb-1">Form Focus</span>
          <p className="text-zinc-400 text-xs leading-relaxed">{pendant.formFocus}</p>
        </div>

        {/* Target customer */}
        <div className="mb-3">
          <span className="text-zinc-600 text-xs uppercase tracking-widest block mb-1">Made For</span>
          <p className="text-zinc-400 text-xs">{pendant.targetCustomer}</p>
        </div>

        {/* Image suggestion */}
        <div className="mb-4">
          <span className="text-zinc-600 text-xs uppercase tracking-widest block mb-1">Design Idea</span>
          <p className="text-zinc-500 text-xs italic">{pendant.imageSuggestion}</p>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between border-t border-zinc-800 pt-3">
          <span className="text-zinc-600 text-xs uppercase tracking-widest">Price Range</span>
          <span className={`font-bold text-sm ${s.accent}`}>{pendant.priceRange}</span>
        </div>

        {/* Demo disclaimer */}
        <p className="text-zinc-700 text-xs mt-2 italic">Demo price — school project only</p>
      </div>
    </div>
  )
}
