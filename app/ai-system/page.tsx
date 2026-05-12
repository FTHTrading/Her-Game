import Section from '@/components/Section'
import Image from 'next/image'
import { ragKnowledgeBase, mcpTools } from '@/data/ragKnowledgeBase'

export const metadata = {
  title: 'AI System — HER GAME',
}

const agentSteps = [
  { step: '1', label: 'User asks a question', detail: '"What pendant is best for a soccer player?"', badge: 'Question' },
  { step: '2', label: 'AI checks knowledge base', detail: 'RAG search finds soccer pendant info', badge: 'Search' },
  { step: '3', label: 'AI picks the right tool', detail: 'Calls recommendPendant() or searchProducts()', badge: 'Tool' },
  { step: '4', label: 'AI gives a short answer', detail: '"The Soccer Power Kick Pendant — Silver, $24.99"', badge: 'Answer' },
  { step: '5', label: 'AI suggests next step', detail: '"Want to see bundle options for your team?"', badge: 'Next' },
  { step: '6', label: 'No private data saved', detail: 'Zero student info stored. School-safe always.', badge: 'Safe' },
]

const safetyRules = [
  'No collecting student names or personal info',
  'No medical or health advice',
  'No body size criticism of any kind',
  'No real payment collection',
  'No unsafe sports training advice',
  'No adult content — always PG rated',
  'No copyrighted team logos used',
  'No real purchases processed',
]

export default function AISystemPage() {
  return (
    <>
      {/* Page hero */}
      <div className="relative overflow-hidden border-b border-zinc-800">
        <Image
          src="/images/her-game-7.png"
          alt="HER GAME AI System"
          width={1200}
          height={400}
          className="w-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
        <div className="relative py-24 px-4 text-center">
          <p className="text-yellow-600 text-xs tracking-[0.5em] uppercase mb-3">Project Feature</p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 uppercase mb-4">
            AI System
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base leading-relaxed">
            A school-safe AI assistant concept using RAG and MCP tools to help shoppers find the right pendant.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 justify-center">
              {['Concept Demo Only', 'No Real Data Collected', 'School Safe', 'PG Rated'].map((tag) => (
                <span key={tag} className="text-xs bg-zinc-900 border border-zinc-700 text-zinc-400 px-3 py-1 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
        </div>
      </div>

      {/* What is it */}
      <Section title="System Overview" accent>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              badge: '01',
              title: 'AI Agent',
              color: 'border-yellow-700/30',
              body: 'A friendly AI shopping helper. Ask it any question about HER GAME pendants — by sport, price, or gift type. It gives short, safe answers.',
            },
            {
              badge: '02',
              title: 'RAG Knowledge Base',
              color: 'border-zinc-600/40',
              body: 'A safe library of product info, sport descriptions, size guides, pricing examples, FAQs, and brand rules. The AI reads this before answering.',
            },
            {
              badge: '03',
              title: 'MCP Tool Layer',
              color: 'border-slate-600/40',
              body: 'A set of safe demo tools the AI can use — like searching products, recommending pendants, and generating gift messages. No real data involved.',
            },
          ].map((item) => (
            <div key={item.title} className={`bg-zinc-950 border ${item.color} rounded-sm p-6`}>
              <div className="w-12 h-12 mb-4 rounded-sm bg-yellow-500/10 border border-yellow-600/20 flex items-center justify-center text-yellow-400 font-display font-bold tracking-wider">
                {item.badge}
              </div>
              <h3 className="text-zinc-100 font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MCP Tools */}
      <Section title="MCP Demo Tools" subtitle="These are the 7 tools the AI assistant can use." className="bg-zinc-950/50">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mcpTools.map((tool) => (
            <div key={tool.name} className="bg-zinc-950 border border-zinc-800 rounded-sm p-5 hover:border-yellow-700/30 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-400 text-xs font-mono bg-green-400/10 px-2 py-0.5 rounded-sm">
                  {tool.safe ? 'SAFE' : 'DEMO'}
                </span>
              </div>
              <p className="text-yellow-400 font-mono text-sm font-bold mb-2">{tool.name}</p>
              <p className="text-zinc-400 text-sm mb-3">{tool.description}</p>
              <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-2">
                <p className="text-zinc-500 text-xs font-mono leading-relaxed">{tool.example}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Agent Workflow */}
      <Section title="How the Agent Works" subtitle="6 simple steps — from question to safe answer." accent>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-yellow-600/40 via-zinc-700 to-transparent hidden sm:block" />
            <div className="space-y-4">
              {agentSteps.map((s) => (
                <div key={s.step} className="flex items-start gap-5">
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-zinc-950 border border-yellow-700/40 flex items-center justify-center z-10">
                    <span className="text-yellow-400 font-bold text-sm">{s.step}</span>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-sm p-4 flex-1 hover:border-yellow-700/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-7 h-7 rounded-full bg-yellow-500/10 border border-yellow-600/20 flex items-center justify-center text-yellow-400 text-xs font-bold">
                        {s.step}
                      </span>
                      <p className="text-zinc-100 font-semibold text-sm">{s.label}</p>
                    </div>
                    <p className="text-zinc-500 text-xs font-mono">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* RAG Knowledge Base samples */}
      <Section title="RAG Knowledge Base" subtitle="Sample entries from the safe product knowledge library." className="bg-zinc-950/50">
        <div className="grid sm:grid-cols-2 gap-4">
          {ragKnowledgeBase.slice(0, 6).map((entry) => (
            <div key={entry.id} className="bg-zinc-950 border border-zinc-800 rounded-sm p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded-sm font-mono">{entry.id}</span>
                <span className="text-xs bg-yellow-500/10 text-yellow-600 px-2 py-0.5 rounded-sm">{entry.category}</span>
              </div>
              <p className="text-zinc-200 text-sm font-semibold mb-2">Q: {entry.question}</p>
              <p className="text-zinc-400 text-sm leading-relaxed">A: {entry.answer}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-zinc-600 text-xs mt-4">
          Knowledge base has {ragKnowledgeBase.length} safe demo entries. No real student data.
        </p>
      </Section>

      {/* Safety Rules */}
      <Section title="Safety Rules" subtitle="HER GAME AI always follows these school-safe rules." accent>
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-3">
            {safetyRules.map((rule, i) => (
              <div key={i} className="flex items-start gap-3 bg-zinc-950 border border-green-900/30 rounded-sm p-3">
                <span className="text-green-500 text-sm flex-shrink-0">SAFE</span>
                <p className="text-zinc-300 text-sm">{rule}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-zinc-900 border border-zinc-700 rounded-sm p-4 text-center">
            <p className="text-zinc-400 text-sm">
              This is a <strong className="text-zinc-200">concept demo</strong> for a 7th grade marketing project.
              No real AI, no real data, no real payments. Created by Kaci Burns.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
