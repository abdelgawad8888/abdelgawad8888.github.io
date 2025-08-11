/**
 * Portfolio Hero section (Customer Success focused)
 * - Text-led layout without photo box
 * - Gradient headline, KPI chips, and CTA
 */
import React from 'react'
import { ArrowRight, LineChart, TrendingDown, ShieldCheck, HeartHandshake } from 'lucide-react'

/**
 * HeroSection
 * Renders header with name, updated title, and concise summary
 */
export default function HeroSection() {
  /**
   * Scroll to Contact for primary CTA
   */
  const goToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="overview"
      className="relative w-full bg-black text-white py-24 section-grid section-radial"
    >
      {/* Subtle section glow */}
      <div className="section-glow" />

      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 gap-10">
        {/* Copy - full width */}
        <div className="lg:max-w-5xl">
          <div className="w-24 h-2 brand-divider mb-6" />
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3">
            AHMED <span className="brand-text">ESSMAT</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Senior Customer Success Manager • Strategic Accounts • Global SaaS Platforms
          </p>

          {/* Summary */}
          <div className="mt-6 glass p-6 md:p-8 rounded-lg border border-white/10">
            <span className="inline-block text-xs md:text-sm font-black tracking-wider uppercase text-white bg-black/40 px-2 py-1 rounded">
              Professional Summary
            </span>
            <p className="mt-3 text-white/95 leading-relaxed">
              Senior Customer Success and CX leader with 12+ years driving retention, growth, and loyalty across
              SaaS, e-commerce, and telecom. Experienced in managing multi-million-dollar strategic accounts,
              increasing NPS by double digits, and reducing churn via data-driven insights, process automation,
              and proactive engagement. Skilled at leading cross-functional teams and aligning product adoption
              with measurable outcomes.
            </p>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={goToContact}
                className="brand-gradient text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Me
                <ArrowRight className="w-5 h-5 inline-block ml-2" />
              </button>
            </div>
          </div>

          {/* KPI Chips */}
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="kpi">
              <LineChart className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-300 font-semibold">NPS +15% YoY</span>
            </div>
            <div className="kpi">
              <TrendingDown className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-300 font-semibold">Churn Risk -22%</span>
            </div>
            <div className="kpi">
              <HeartHandshake className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-300 font-semibold">Retention +25%</span>
            </div>
            <div className="kpi">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-300 font-semibold">SLA Compliance 95%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
