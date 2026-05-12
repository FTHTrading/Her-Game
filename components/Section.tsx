import React from 'react'

interface Props {
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  accent?: boolean
  id?: string
}

export default function Section({ title, subtitle, children, className = '', accent = false, id }: Props) {
  return (
    <section id={id} className={`py-16 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-10 text-center">
          {accent && (
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-500/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-500/60" />
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wider text-zinc-100 uppercase">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          )}
          <div className="mt-4 h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-yellow-700/40 to-transparent" />
        </div>

        {children}
      </div>
    </section>
  )
}
