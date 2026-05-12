import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Barlow_Condensed, Inter } from 'next/font/google'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HER GAME — Precision Athlete Pendant Collection',
  description:
    'A 7th grade marketing project by Kaci Burns. HER GAME is a sports pendant collection celebrating female athletes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body className="bg-zinc-950 text-zinc-100 min-h-screen font-body">
        <Navbar />
        <main className="pt-16">{children}</main>

        {/* Footer */}
        <footer className="border-t border-zinc-800 mt-24 py-10 text-center px-4">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 font-bold tracking-widest text-lg uppercase mb-2">
            HER GAME
          </p>
          <p className="text-zinc-600 text-xs tracking-widest uppercase mb-4">
            Form · Focus · Force
          </p>
          <p className="text-zinc-700 text-xs max-w-lg mx-auto">
            This is a 7th grade marketing class project demo by Kaci Burns. This website is for school
            purposes only. No real purchases can be made. No personal data is collected. All prices,
            products, and AI features are examples only.
          </p>
          <p className="text-zinc-800 text-xs mt-4">
            © 2024 HER GAME — School Project Demo
          </p>
        </footer>
      </body>
    </html>
  )
}
