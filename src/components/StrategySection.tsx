/**
 * StrategySection
 * Focus areas without any navigation CTAs
 * Uses compact glass cards to highlight capabilities relevant to Customer Success & Strategic Accounts
 */
import React from 'react'
import { Users, Target, BarChart3, Workflow } from 'lucide-react'
import SectionHeader from './common/SectionHeader'

/**
 * FocusCardProps
 * Defines the structure of a focus area card
 */
interface FocusCardProps {
  icon: React.ReactNode
  title: string
  points: string[]
}

/**
 * FocusCard
 * Presents a single capability area with concise bullets
 */
function FocusCard({ icon, title, points }: FocusCardProps) {
  return (
    <div className="glass lift border border-white/10 border-l-4 border-orange-500 p-6">
      <div className="flex items-center gap-3 text-orange-500 mb-3">
        {icon}
        <div className="text-sm font-black uppercase tracking-wider">{title}</div>
      </div>
      <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

/**
 * StrategySection
 * Highlights four core focus areas aligned to your updated resume
 */
export default function StrategySection() {
  // Focus areas mapped from updated resume themes (CS, Strategic Accounts, VoC, Automation/Insights)
  const items: FocusCardProps[] = [
    {
      icon: <Users className="w-4 h-4" />,
      title: 'Strategic Accounts',
      points: [
        'Enterprise & mid‑market relationship management',
        'Adoption plans, QBRs, and renewal readiness',
        'Playbooks for expansion and upsell',
      ],
    },
    {
      icon: <Target className="w-4 h-4" />,
      title: 'Customer Success Ops',
      points: [
        'Onboarding → maturity lifecycle orchestration',
        'SLA governance and cross‑functional cadence',
        'Churn‑risk flags and save motions',
      ],
    },
    {
      icon: <BarChart3 className="w-4 h-4" />,
      title: 'VoC & Health Scores',
      points: [
        'NPS, CSAT, CLV insights → action plans',
        'Health score monitoring and alerts',
        'Root‑cause analysis across journeys',
      ],
    },
    {
      icon: <Workflow className="w-4 h-4" />,
      title: 'Automation & Insights',
      points: [
        'Process automation in CRM (Salesforce)',
        'Dashboards & reporting (Power BI)',
        'Guardrails to reduce friction & rework',
      ],
    },
  ]

  return (
    <section id="strategies" className="w-full surface-alt py-20 section-grid section-radial">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionHeader
          eyebrow="Capabilities"
          title={
            <>
              FOCUS <span className="brand-text">AREAS</span>
            </>
          }
          subtitle="Customer Success for strategic accounts: adoption, retention, and measurable outcomes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, idx) => (
            <FocusCard key={idx} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}
