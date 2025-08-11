/**
 * CaseStudiesSection
 * Compact case cards following "Context → Approach → Impact"
 */
import React from 'react'
import { MessageCircle, Route, Building2, RefreshCw, ChevronRight } from 'lucide-react'
import SectionHeader from './common/SectionHeader'

/** Case study structure */
interface CaseItem {
  title: string
  bullets: string[]
  icon: React.ReactNode
}

/**
 * CaseCard
 * Renders a single case study card
 */
function CaseCard({ title, bullets, icon }: CaseItem) {
  return (
    <div className="glass lift border border-white/10 border-l-4 border-orange-500 p-6">
      <div className="flex items-center gap-3 text-orange-500 mb-3">
        {icon}
        <div className="text-sm font-black uppercase tracking-wider">{title}</div>
      </div>
      <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

/**
 * CaseStudiesSection
 * Grid of high-level case summaries
 */
export default function CaseStudiesSection() {
  const cases: CaseItem[] = [
    {
      title: 'NPS Recovery & Contact Reduction',
      icon: <MessageCircle className="w-4 h-4" />,
      bullets: [
        'Context: Contacts per order rising; sentiment slipping',
        'Approach: VoC insights + policy/tooling fixes; ownership cadence',
        'Impact: NPS up double-digits; refund cycle ↓ ~60%',
      ],
    },
    {
      title: 'Last‑mile SLA Command Center',
      icon: <Route className="w-4 h-4" />,
      bullets: [
        'Context: OTIF volatility; first‑attempt delivery gaps',
        'Approach: Real‑time exception handling in Power BI; playbooks',
        'Impact: OTIF ↑; first‑attempt delivery ↑; queue aging visible live',
      ],
    },
    {
      title: 'Pickup Station Rollout Engine',
      icon: <Building2 className="w-4 h-4" />,
      bullets: [
        'Context: Scale physical coverage with quality CX',
        'Approach: 10+ stations; 500+ field activations; budget split by category',
        'Impact: Faster pickups; conversion ↑; CPA tracked and optimized',
      ],
    },
    {
      title: 'Returns & Refunds Streamline',
      icon: <RefreshCw className="w-4 h-4" />,
      bullets: [
        'Context: Long refund cycles; repeat contacts',
        'Approach: SOPs + automation; clear ownership and guardrails',
        'Impact: Refund time ↓ ~60%; repeat contacts ↓; sentiment ↑',
      ],
    },
  ]

  return (
    <section id="cases" className="w-full bg-black py-20 section-grid section-radial">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionHeader
          eyebrow="Case Studies"
          title={
            <>
              CONTEXT → <span className="brand-text">APPROACH</span> → IMPACT
            </>
          }
          subtitle="Concise, outcome-driven snapshots."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cases.map((c, idx) => (
            <CaseCard key={idx} {...c} />
          ))}
        </div>

        {/* Optional small footer hint */}
        <div className="mt-6 text-gray-500 text-xs flex items-center gap-2">
          <ChevronRight className="w-3 h-3" />
          <span>Deep dive below: B2B Workflow Automation</span>
        </div>
      </div>
    </section>
  )
}
