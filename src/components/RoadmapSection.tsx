/**
 * Career Timeline section (styled like the document's roadmap)
 * Displays key milestones with a toggle to sort ascending/descending
 */
import React, { useMemo, useState } from 'react'
import SectionHeader from './common/SectionHeader'

/** Timeline item schema */
interface TimelineItem {
  period: string
  title: string
  place: string
}

/**
 * getStartYear
 * Extracts a numeric start year for sorting; treats missing year as -1
 */
function getStartYear(period: string): number {
  const match = period.match(/\d{4}/)
  if (match) return parseInt(match[0], 10)
  return -1
}

/**
 * hasPresent
 * Checks if the period contains "Present"
 */
function hasPresent(period: string): boolean {
  return /present/i.test(period)
}

/**
 * compareItems
 * Compares two timeline items according to the selected order
 */
function compareItems(a: TimelineItem, b: TimelineItem, order: 'desc' | 'asc'): number {
  const aPresent = hasPresent(a.period)
  const bPresent = hasPresent(b.period)

  if (order === 'desc') {
    // Newest → Oldest, keep "Present" first
    if (aPresent && !bPresent) return -1
    if (!aPresent && bPresent) return 1
    return getStartYear(b.period) - getStartYear(a.period)
  }
  // Ascending, Oldest → Newest, keep "Present" last
  if (aPresent && !bPresent) return 1
  if (!aPresent && bPresent) return -1
  return getStartYear(a.period) - getStartYear(b.period)
}

/**
 * RoadmapSection
 * Renders a timeline with a sort-order toggle
 */
export default function RoadmapSection() {
  const [order, setOrder] = useState<'desc' | 'asc'>('desc')

  const items: TimelineItem[] = [
    { period: '2024 – Present', title: 'Head of Offline Marketing & City Expansion', place: 'Jumia Egypt' },
    { period: '2020 – 2024', title: 'Senior Manager – Customer Operations', place: 'Jumia Egypt' },
    { period: '2018 – 2020', title: 'CX & Operations Manager', place: 'Jumia Food & Jumia Mall' },
    { period: '2017 – 2018', title: 'E2E Queue Mgmt Expert', place: 'Jumia Egypt' },
    { period: '2015', title: 'Operations Manager – Entertainment', place: 'Emaar Masr | Marassi' },
    { period: '2010 – 2012', title: 'Customer Service Roles', place: 'Etisalat UAE • du UAE' },
  ]

  /** Memoized sorted list to avoid recalculating on every render */
  const sorted = useMemo(() => {
    return [...items].sort((a, b) => compareItems(a, b, order))
  }, [order])

  const subtitle = order === 'desc' ? 'Most recent → Older' : 'Older → Most recent'

  return (
    <section id="roadmap" className="w-full bg-black py-20 section-grid section-radial">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <SectionHeader
            eyebrow="Journey"
            title={
              <>
                CAREER <span className="brand-text">TIMELINE</span>
              </>
            }
            subtitle={subtitle}
          />
          {/* Sort order segmented control */}
          <div className="inline-flex rounded-md border border-orange-500/40 overflow-hidden h-fit">
            <button
              type="button"
              aria-pressed={order === 'desc'}
              onClick={() => setOrder('desc')}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                order === 'desc'
                  ? 'bg-orange-500 text-white'
                  : 'bg-transparent text-gray-300 hover:text-white'
              }`}
            >
              Newest → Oldest
            </button>
            <button
              type="button"
              aria-pressed={order === 'asc'}
              onClick={() => setOrder('asc')}
              className={`px-4 py-2 text-sm font-medium transition-colors border-l border-orange-500/30 ${
                order === 'asc'
                  ? 'bg-orange-500 text-white'
                  : 'bg-transparent text-gray-300 hover:text-white'
              }`}
            >
              Oldest → Newest
            </button>
          </div>
        </div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {sorted.map((item, idx) => (
            <div key={idx} className="glass lift border border-white/10 border-l-4 border-orange-500 p-6">
              <div className="text-xs font-black text-orange-500 uppercase tracking-wider mb-2">
                {item.period}
              </div>
              <div className="text-sm text-white font-semibold">{item.title}</div>
              <div className="text-xs text-gray-400 mt-1">{item.place}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
