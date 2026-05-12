import Section from '@/components/Section'
import Image from 'next/image'
import Link from 'next/link'
import { slides } from '@/data/slideContent'

export const metadata = {
  title: 'Presentation — HER GAME',
}

export default function PresentationPage() {
  return (
    <>
      {/* Page hero */}
      <div className="py-20 px-4 text-center border-b border-zinc-800">
        <p className="text-yellow-600 text-xs tracking-[0.5em] uppercase mb-3">School Presentation</p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 uppercase mb-4">
          Slides
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base leading-relaxed">
          11-slide presentation outline for Kaci Burns — 7 Functions of Marketing project.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          <span className="text-xs bg-zinc-900 border border-zinc-700 text-zinc-500 px-3 py-1 rounded-sm">11 Slides</span>
          <span className="text-xs bg-zinc-900 border border-zinc-700 text-zinc-500 px-3 py-1 rounded-sm">Max 5 bullets each</span>
          <span className="text-xs bg-zinc-900 border border-zinc-700 text-zinc-500 px-3 py-1 rounded-sm">Max 5 words per bullet</span>
          <span className="text-xs bg-zinc-900 border border-zinc-700 text-zinc-500 px-3 py-1 rounded-sm">Speaker notes included</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link href="/presentation/pdf" className="px-4 py-2 text-xs uppercase tracking-widest rounded-sm border border-yellow-700/40 text-yellow-400 hover:bg-yellow-500/10 transition-colors">
            Open PDF View
          </Link>
          <a href="/api/presentation/pptx" className="px-4 py-2 text-xs uppercase tracking-widest rounded-sm border border-zinc-700 text-zinc-300 hover:border-yellow-700/40 hover:text-yellow-400 transition-colors">
            Download PowerPoint
          </a>
        </div>
      </div>

      {/* Slide grid */}
      <Section title="All 11 Slides" subtitle="Click through each slide below. Use real images in your final deck." accent>
        <div className="space-y-12">
          {slides.map((slide) => (
            <div
              key={slide.num}
              id={`slide-${slide.num}`}
              className="bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden"
            >
              {/* Slide header */}
              <div className="flex items-center gap-3 px-6 py-3 border-b border-zinc-800 bg-zinc-900">
                <div className="w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-600/30 flex items-center justify-center text-yellow-400 font-bold text-sm flex-shrink-0">
                  {slide.num}
                </div>
                <p className="text-zinc-400 text-sm font-semibold tracking-wide">{slide.title}</p>
                <span className="ml-auto text-xs text-zinc-600">SLIDE {slide.num} / 11</span>
              </div>

              {/* Slide content — mimics a real slide layout */}
              <div className="grid sm:grid-cols-2 gap-0">
                {/* Left: slide preview */}
                <div className="relative bg-zinc-900 aspect-video overflow-hidden border-r border-zinc-800">
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    className="object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/50" />
                  <div className="absolute inset-0 flex flex-col justify-center px-6">
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 font-bold text-xl sm:text-2xl tracking-widest uppercase mb-1">
                      {slide.heading}
                    </h3>
                    <p className="text-zinc-400 text-xs tracking-widest uppercase mb-4">{slide.subheading}</p>
                    <ul className="space-y-1">
                      {slide.bullets.slice(0, 5).map((b, i) => (
                        <li key={i} className="text-zinc-200 text-xs flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0 mt-2" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    {slide.extraContent && (
                      <div className="mt-4 space-y-2">
                        {slide.extraContent.map((item) => (
                          <div key={item} className="rounded-sm border border-zinc-700 bg-black/40 px-3 py-2 text-[11px] text-zinc-200">
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Image credit */}
                  <div className="absolute bottom-2 right-2">
                    <span className="text-zinc-600 text-xs">Image: {slide.imageAlt}</span>
                  </div>
                </div>

                {/* Right: notes */}
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Bullet Points (≤5 words each)</p>
                    <ul className="space-y-1">
                      {slide.bullets.map((b, i) => (
                        <li key={i} className="text-zinc-300 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0 mt-2" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-700 rounded-sm p-4">
                    <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Speaker Notes</p>
                    <p className="text-zinc-300 text-sm leading-relaxed">{slide.speakerNote}</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Image Suggestion</p>
                    <p className="text-zinc-500 text-xs italic">{slide.imageAlt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Presentation tips */}
      <Section title="Presentation Tips" className="bg-zinc-950/50">
        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            { tip: 'Practice aloud 2–3 times before presenting.' },
            { tip: 'Keep eye contact with your audience, not the screen.' },
            { tip: 'Speak slowly and clearly — no rushing.' },
            { tip: 'Use the speaker notes as a guide, not a script.' },
            { tip: 'Be ready to answer: "Why this product?"' },
            { tip: 'Point to each bullet as you explain it.' },
          ].map((t, i) => (
            <div key={i} className="flex items-start gap-3 bg-zinc-950 border border-zinc-800 rounded-sm p-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
              <p className="text-zinc-300 text-sm">{t.tip}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
