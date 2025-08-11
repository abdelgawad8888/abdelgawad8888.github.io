/**
 * Experience section with corporate card-based timeline design
 * Updated to use glass cards and standardized SectionHeader
 */
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import SectionHeader from './common/SectionHeader';

interface ExperienceItemProps {
  /** Company name */
  company: string;
  /** Position title */
  position: string;
  /** Period of employment */
  period: string;
  /** Job location */
  location: string;
  /** Bullet achievements */
  achievements: string[];
  /** Reveal delay in ms */
  delay: number;
}

/**
 * Individual experience card component
 * Handles intersection-based reveal animation
 */
function ExperienceCard({ company, position, period, location, achievements, delay }: ExperienceItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * Intersection observer to trigger reveal animation
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="glass lift border border-white/10 border-l-4 border-orange-500 p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-orange-500 text-sm font-bold mb-2">
            <Calendar className="w-4 h-4" />
            {period}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{position}</h3>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            {company} • {location}
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 mt-2 flex-shrink-0"></div>
              <p className="text-gray-300 leading-relaxed">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * ExperienceSection
 * Lists experience cards with a call-to-action to view skills
 */
export default function ExperienceSection() {
  /**
   * Experience data
   * Note: Commas between string items are crucial to avoid build errors
   */
  const experiences: ExperienceItemProps[] = [
    {
      company: 'Jumia Egypt',
      position: 'HEAD OF OFFLINE MARKETING & CITY EXPANSION',
      period: 'July 2024 - Present',
      location: 'Cairo, Egypt',
      achievements: [
        'Spearheaded offline marketing sales strategies, consistently exceeding KPI targets across Cairo, Giza, and Canal Cities',
        'Successfully launched over 10 pickup stations and executed 500+ field activations within 5 months',
        'Fostered cross-functional collaboration with Commercial, Marketing, Logistics, and Finance teams',
        'Managed end-to-end lifecycle for new field agents, creating knowledge bases and training materials',
        'Optimized spend for maximum ROI by overseeing field activation budgets and vendor relationships',
      ],
      delay: 0,
    },
    {
      company: 'Jumia Egypt',
      position: 'SENIOR MANAGER – CUSTOMER OPERATIONS',
      period: 'January 2020 - July 2024',
      location: 'Cairo, Egypt',
      achievements: [
        'Achieved 20% reduction in delivery timelines while maintaining 95% on-time delivery rate for 12 consecutive months',
        'Streamlined refund processing time by 60%, significantly boosting customer trust and satisfaction',
        'Improved Net Promoter Score (NPS) by leading Voice of Customer (VoC) analysis and implementing solutions',
        'Directed PMO reviews across operational verticals, fostering accountability and ensuring strict SLA adherence',
        'Served as the Head of Customer Experience during the leadership transition, overseeing Shopping, Delivery, and Returns',
      ],
      delay: 200,
    },
    {
      company: 'Jumia Egypt',
      position: 'CUSTOMER EXPERIENCE MANAGER',
      period: 'December 2018 - January 2020',
      location: 'Cairo, Egypt',
      achievements: [
        'Directed successful operational launch of Jumia Food in Egypt, building support teams and defining workflows',
        'Leveraged Power BI to develop live dashboards, enabling agile decision-making and driving CX improvements',
        'Led post-order support and SLA compliance for Jumia Marketplace, improving returns efficiency',
      ],
      delay: 400,
    },
    {
      company: 'Jumia Egypt',
      position: 'CUSTOMER EXPERIENCE - E2E QUEUE MANAGEMENT EXPERT',
      period: 'July 2017 - December 2018',
      location: 'Cairo, Egypt',
      achievements: [
        'Maintained 99% on-time delivery in Cairo & Giza by redesigning end-to-end queue management systems',
        'Standardized queue policies and trained cross-functional teams on lean delivery and escalation handling',
      ],
      delay: 600,
    },
  ];

  return (
    <section id="experience" className="w-full py-24 surface-alt relative section-grid section-radial">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="Roles"
          title={
            <>
              PROFESSIONAL <span className="brand-text">EXPERIENCE</span>
            </>
          }
          subtitle="A track record of operational excellence, customer experience transformation, and strategic growth."
        />

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            className="brand-gradient text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            VIEW SKILLS &amp; EXPERTISE
          </button>
        </div>
      </div>
    </section>
  );
}
