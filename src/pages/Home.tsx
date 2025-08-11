/**
 * Home page
 * Assembles portfolio sections with Customer Success focus
 */
import React from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import StrategySection from '../components/StrategySection'
import RoadmapSection from '../components/RoadmapSection'
import MetricsSection from '../components/MetricsSection'
import WhatsNextSection from '../components/WhatsNextSection'
import FeatureSection from '../components/FeatureSection'
import ExperienceSection from '../components/ExperienceSection'
import SkillsSection from '../components/SkillsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import EducationSection from '../components/EducationSection'
import ContactSection from '../components/ContactSection'
import CaseStudiesSection from '../components/CaseStudiesSection'

/**
 * Home
 * Flow: Overview → Highlights → Focus → Case Studies → Project → Timeline → Resume → Services → Contact
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-black pb-20">
      <Navigation />
      <HeroSection />
      {/* Highlights (Deep surface) */}
      <MetricsSection />
      {/* Focus Areas (Alt surface) */}
      <StrategySection />
      {/* Case Studies (Deep) */}
      <CaseStudiesSection />
      {/* Highlighted Project (Alt) */}
      <FeatureSection />
      {/* Career Timeline (Deep) */}
      <RoadmapSection />
      {/* Resume details (Alt) */}
      <ExperienceSection />
      <SkillsSection />
      {/* Testimonials (Alt) */}
      <TestimonialsSection />
      <EducationSection />
      {/* Services (Alt) */}
      <WhatsNextSection />
      <ContactSection />
    </div>
  )
}
