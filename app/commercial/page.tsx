export default function CommercialPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-6 py-16 text-white">
      <h1 className="text-4xl font-bold text-[#C9A84C] mb-4 font-condensed tracking-wide">
        HER GAME Commercial
      </h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">
        This is a demo commercial page for the school project.
      </p>
      <div className="border border-[#C9A84C] rounded-lg p-8 max-w-2xl w-full bg-[#1A1A1A] text-center">
        <p className="text-[#C9A84C] text-xl font-bold mb-2">Built for Athletes.</p>
        <p className="text-gray-300 mb-4">
          HER GAME short video commercial — &quot;Built for Athletes&quot;
        </p>
        <p className="text-sm text-gray-400 mb-6">
          Ad type: <span className="text-[#C9A84C] font-semibold">Persuade</span>
        </p>
        <div className="border border-gray-600 rounded p-6 bg-[#0A0A0A] mb-6">
          <p className="text-gray-500 text-sm italic">
            [Demo video placeholder — HER GAME commercial would appear here]
          </p>
          <p className="text-gray-500 text-sm italic mt-2">
            Tagline: FORM. FOCUS. FORCE.
          </p>
        </div>
        <p className="text-xs text-gray-500">
          This page is a demo created for the 7th-grade Marketing Functions school project by Kaci Burns.
          No real video content is included.
        </p>
      </div>
      <div className="mt-8 border border-gray-700 rounded-lg p-6 max-w-2xl w-full bg-[#1A1A1A] text-center">
        <p className="text-[#C9A84C] font-bold mb-2">Print Ad Demo</p>
        <p className="text-gray-300 text-sm mb-2">Pendant poster — FORM. FOCUS. FORCE.</p>
        <p className="text-sm text-gray-400">
          Ad type: <span className="text-[#C9A84C] font-semibold">Persuade</span>
        </p>
      </div>
    </main>
  )
}
