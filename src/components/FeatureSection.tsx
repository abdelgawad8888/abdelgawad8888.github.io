/**
 * Highlighted Project section
 * Presents "B2B Workflow Automation" with phased, timeline-like cards and a compact metrics strip
 */
import React from 'react'
import { Settings, Workflow, CheckCircle2, BarChart3 } from 'lucide-react'
import SectionHeader from './common/SectionHeader'

/** Phase card props */
interface PhaseCardProps {
  step: string
  title: string
  points: string[]
}

/**
 * PhaseCard
 * Renders a single phase of the project with key bullets
 */
function PhaseCard({ step, title, points }: PhaseCardProps) {
  return (
    <div className="glass lift border border-white/10 border-l-4 border-orange-500 p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-black text-orange-500 tracking-wider">{step}</span>
        <div className="w-2 h-2 bg-orange-500" />
      </div>
      <h4 className="text-lg font-bold text-white mb-3">{title}</h4>
      <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

/**
 * FeatureSection
 * Renders the project highlight split into detailed phases + impacts + case metrics strip
 */
export default function FeatureSection() {
  const phases: PhaseCardProps[] = [
    {
      step: 'Phase 1',
      title: 'Discovery & Context',
      points: [
        'Mapped current-state B2B flows across sales, logistics, and support',
        'Quantified pain points: compliance gaps, return escalations, siloed handoffs',
        'Aligned success criteria with stakeholders (time-to-resolution, returns, SLA adherence)',
      ],
    },
    {
      step: 'Phase 2',
      title: 'Root-Cause Diagnosis',
      points: [
        'Identified manual touchpoints and duplicated entries across teams',
        'Flagged policy ambiguities creating inconsistent responses',
        'Isolated data breaks that hid accountability and delayed actions',
      ],
    },
    {
      step: 'Phase 3',
      title: 'Solution Design',
      points: [
        'Redesigned the E2E journey with standardized SOPs and decision trees',
        'Defined role-based ownership and escalation paths',
        'Outlined required tool changes in Salesforce/internal systems',
      ],
    },
    {
      step: 'Phase 4',
      title: 'Automation Build',
      points: [
        'Implemented workflow rules, templates, and validation in CRM',
        'Connected cross-team notifications to reduce waiting time',
        'Introduced field-level checks to prevent non-compliant actions',
      ],
    },
    {
      step: 'Phase 5',
      title: 'Rollout & Enablement',
      points: [
        'Delivered training and adoption playbooks per function',
        'Piloted in priority segments before scaled rollout',
        'Established monitoring dashboards and daily triage routines',
      ],
    },
    {
      step: 'Phase 6',
      title: 'Results & Continuous Improvement',
      points: [
        'Achieved 100% regulatory compliance and eliminated B2B return issues',
        'Improved cross-team responsiveness and on-time SLA adherence',
        'Embedded VOC learnings into periodic SOP updates',
      ],
    },
  ]

  /** Case metrics displayed as compact cards above phases */
  const metrics = [
    { label: 'Compliance', value: '100%' },
    { label: 'B2B Returns', value: '0%' },
    { label: 'On-time SLA', value: '95%' },
    { label: 'Refund Time', value: '-60%' },
    { label: 'City Launches', value: '10+' },
    { label: 'Field Activations', value: '500+' },
  ]

  return (
    <section id="platform" className="w-full surface-alt py-20 section-grid section-radial">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionHeader
          eyebrow="Highlighted Project"
          title={
            <>
              B2B <span className="brand-text">WORKFLOW</span> AUTOMATION
            </>
          }
          subtitle="Diagnose, redesign, automate, and enable—de-risked rollout for maximum adoption."
        />

        {/* Case metrics strip */}
        <div className="mb-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((m, i) => (
            <div key={i} className="glass border border-white/10 border-l-4 border-orange-500 p-4">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-semibold text-orange-500">{m.label}</span>
              </div>
              <div className="text-xl font-extrabold text-white">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Phases grid (timeline-like split) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {phases.map((ph, idx) => (
            <PhaseCard key={idx} {...ph} />
          ))}
        </div>

        {/* Impact highlights */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass border border-white/10 border-l-4 border-orange-500 p-6 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-orange-500 mt-1" />
            <div>
              <div className="text-white font-bold">Compliance</div>
              <div className="text-gray-300 text-sm">100% adherence to policy and regulatory checks</div>
            </div>
          </div>
          <div className="glass border border-white/10 border-l-4 border-orange-500 p-6 flex items-start gap-3">
            <Workflow className="w-5 h-5 text-orange-500 mt-1" />
            <div>
              <div className="text-white font-bold">Process Health</div>
              <div className="text-gray-300 text-sm">Standardized SOPs and clear ownership across teams</div>
            </div>
          </div>
          <div className="glass border border-white/10 border-l-4 border-orange-500 p-6 flex items-start gap-3">
            <BarChart3 className="w-5 h-5 text-orange-500 mt-1" />
            <div>
              <div className="text-white font-bold">Performance</div>
              <div className="text-gray-300 text-sm">Eliminated return issues and improved SLA on-time rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
