'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/collection', label: 'Collection' },
  { href: '/marketing', label: '7 Functions' },
  { href: '/business-plan', label: 'Business Plan' },
  { href: '/ai-system', label: 'AI System' },
  { href: '/presentation', label: 'Presentation' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-yellow-900/40">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            HER GAME
          </span>
          <span className="hidden sm:inline text-xs text-zinc-500 tracking-widest uppercase">
            Precision Pendants
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-zinc-400 hover:text-yellow-400 transition-colors tracking-wide"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-zinc-400 hover:text-yellow-400 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-zinc-950 border-t border-zinc-800 px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 text-zinc-300 hover:text-yellow-400 transition-colors text-sm tracking-wide"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
