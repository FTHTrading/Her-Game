import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Full-bleed hero image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/her-game-8.png"
          alt="HER GAME — Precision Athlete Pendants"
          fill
          className="object-cover object-top opacity-30"
          priority
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      {/* Diamond decorators */}

      {/* Main title */}
      <h1 className="text-6xl sm:text-8xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 uppercase mb-4">
        HER GAME
      </h1>

      {/* Subtitle */}
      <p className="text-zinc-400 tracking-[0.3em] uppercase text-sm sm:text-base mb-2">
        Precision Athlete Pendant Collection
      </p>

      {/* Tagline */}
      <p className="text-zinc-300 text-lg sm:text-2xl font-light mt-4 max-w-xl leading-relaxed">
        Sports pendants built around{' '}
        <span className="text-yellow-400 font-semibold">strength</span>,{' '}
        <span className="text-zinc-200 font-semibold">focus</span>, and{' '}
        <span className="text-yellow-400 font-semibold">perfect form</span>.
      </p>

      {/* Bottom slogan */}
      <p className="mt-3 tracking-[0.5em] text-zinc-600 uppercase text-xs font-semibold">
        Form · Focus · Force
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Link
          href="/collection"
          className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold tracking-widest uppercase text-sm rounded-sm hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg shadow-yellow-900/30"
        >
          View Collection
        </Link>
        <Link
          href="/marketing"
          className="px-8 py-3 border border-yellow-600/50 text-yellow-400 font-semibold tracking-widest uppercase text-sm rounded-sm hover:bg-yellow-900/20 transition-all"
        >
          See Marketing Plan
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 text-zinc-600 text-xs tracking-widest">
        <span>SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  )
}
