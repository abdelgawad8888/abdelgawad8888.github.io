/**
 * Services section
 * - Informative tiles (no CTAs)
 * - Fresh glassy tiles with consistent brand accents and new header
 */
import React from 'react'
import { Users, Map, Settings, BarChart3 } from 'lucide-react'
import SectionHeader from './common/SectionHeader'

/** Service card props */
interface ServiceItem {
  title: string
  description: string
  icon: React.ReactNode
}

/**
 * ServiceTile
 * Renders a single service/offer tile
 */
function ServiceTile({ title, description, icon }: ServiceItem) {
  return (
    <div className="card card-hover lift p-8 border border-white/10">
      <div className="flex items-center gap-3 mb-3 text-orange-500">
        <div className="p-2 bg-white/10 rounded-md">{icon}</div>
        <div className="text-sm font-black uppercase tracking-wider">{title}</div>
      </div>
      <p className="text-gray-200/90 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

/**
 * WhatsNextSection
 * Renders the services grid without CTAs
 */
export default function WhatsNextSection() {
  const items: ServiceItem[] = [
    {
      title: 'CX STRATEGY & OPERATIONS',
      description:
        'Design end-to-end CX, SLA governance, VoC programs, and lifecycle orchestration that lift satisfaction and reduce friction.',
      icon: <Users className="w-5 h-5 text-orange-500" />,
    },
    {
      title: 'CITY & MARKET EXPANSION',
      description:
        'Plan and execute multi-city rollouts with field activations, agent playbooks, and KPI tracking for predictable growth.',
      icon: <Map className="w-5 h-5 text-orange-500" />,
    },
    {
      title: 'B2B WORKFLOW OPTIMIZATION',
      description:
        'Eliminate bottlenecks via SOPs and CRM automation; align ownership and guardrails for speed and compliance.',
      icon: <Settings className="w-5 h-5 text-orange-500" />,
    },
    {
      title: 'DATA & DASHBOARDS',
      description:
        'Build Power BI dashboards and health-score frameworks for real-time visibility and proactive leadership.',
      icon: <BarChart3 className="w-5 h-5 text-orange-500" />,
    },
  ]

  return (
    <section id="whats-next" className="w-full surface-alt py-20 relative section-grid section-radial">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              HOW <span className="brand-text">I CAN HELP</span>
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <ServiceTile key={idx} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}
