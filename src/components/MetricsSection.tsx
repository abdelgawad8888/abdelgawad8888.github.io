/**
 * MetricsSection
 * Compact highlight metrics aligned with Customer Success focus
 */
import React from 'react'
import { TrendingUp, ShieldCheck, HeartHandshake, RefreshCw, Clock, LineChart } from 'lucide-react'
import SectionHeader from './common/SectionHeader'

/** Metric item props */
interface MetricProps {
  label: string
  value: string
  icon: React.ReactNode
}

/**
 * MetricCard
 * Displays a single KPI card
 */
function MetricCard({ label, value, icon }: MetricProps) {
  return (
    <div className="glass lift border border-white/10 border-l-4 border-orange-500 p-6">
      <div className="flex items-center gap-2 text-orange-500 mb-2">
        {icon}
        <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-2xl font-extrabold text-white">{value}</div>
    </div>
  )
}

/**
 * MetricsSection
 * Grid of 6 outcome KPIs
 */
export default function MetricsSection() {
  const metrics: MetricProps[] = [
    { label: 'Experience', value: '12+ Years', icon: <LineChart className="w-4 h-4" /> },
    { label: 'NPS Lift', value: '+15% YoY', icon: <TrendingUp className="w-4 h-4" /> },
    { label: 'Churn Risk', value: '-22%', icon: <RefreshCw className="w-4 h-4" /> },
    { label: 'SLA Compliance', value: '95%', icon: <ShieldCheck className="w-4 h-4" /> },
    { label: 'Retention', value: '+25%', icon: <HeartHandshake className="w-4 h-4" /> },
    { label: 'Refund Time', value: '-60%', icon: <Clock className="w-4 h-4" /> },
  ]

  return (
    <section id="milestones" className="w-full bg-black py-16 section-grid section-radial relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionHeader
          eyebrow="Outcomes"
          title={
            <>
              KEY <span className="brand-text">OUTCOMES</span>
            </>
          }
          subtitle="Customer Success metrics across SaaS and e‑commerce"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((m, i) => (
            <MetricCard key={i} {...m} />
          ))}
        </div>
      </div>
    </section>
  )
}
