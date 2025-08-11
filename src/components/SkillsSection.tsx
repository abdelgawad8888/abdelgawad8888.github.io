/**
 * Skills section with strategic categories matching document design
 * Updated with glass cards and consistent section header
 */
import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, TrendingUp, Users, Settings, BarChart3 } from 'lucide-react';
import SectionHeader from './common/SectionHeader';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay: number;
  featured?: boolean;
}

/**
 * Individual skill category card component
 */
function SkillCategory({ title, icon, skills, delay, featured = false }: SkillCategoryProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      <div
        className={`lift p-8 border-l-4 transition-all duration-300 ${
          featured
            ? 'glass border-orange-600'
            : 'glass border-orange-500'
        }`}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-orange-500/20 rounded-md">
            <div className="text-orange-400">{icon}</div>
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500"></div>
              <span className="text-sm text-gray-300">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'STRATEGIC LEADERSHIP',
      icon: <TrendingUp className="w-6 h-6" />,
      skills: [
        'Customer Experience (CX) Strategy',
        'Market & City Expansion',
        'Cross-Functional Leadership',
        'Voice of Customer (VoC) Analysis',
        'Strategic Planning & Execution'
      ],
      delay: 0,
      featured: true
    },
    {
      title: 'OPERATIONS MANAGEMENT',
      icon: <Settings className="w-6 h-6" />,
      skills: [
        'Process Improvement (Six Sigma)',
        'Project Management (PMO)',
        'Agile Processes & Planning',
        'End-to-End Operations',
        'SLA Management'
      ],
      delay: 200
    },
    {
      title: 'DATA & ANALYTICS',
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [
        'Power BI & Data Visualization',
        'Performance Metrics & KPIs',
        'Business Intelligence',
        'Data-Driven Strategy',
        'Reporting & Dashboards'
      ],
      delay: 400
    },
    {
      title: 'TECHNOLOGY TOOLS',
      icon: <Database className="w-6 h-6" />,
      skills: [
        'CRM: Salesforce, MO Engage',
        'BI Tools: Power BI, Tableau',
        'Marketing: Mailchimp',
        'Productivity: Microsoft Suite',
        'AI Tools: Prompt Engineering'
      ],
      delay: 600
    },
    {
      title: 'CUSTOMER OPERATIONS',
      icon: <Users className="w-6 h-6" />,
      skills: [
        'B2B Process Optimization',
        'Customer Support Strategy',
        'Regulatory Compliance',
        'Quality Assurance',
        'Customer Retention'
      ],
      delay: 800
    },
    {
      title: 'BUSINESS DEVELOPMENT',
      icon: <Code className="w-6 h-6" />,
      skills: [
        'Market Research & Analysis',
        'Go-to-Market Strategy',
        'Business Process Design',
        'Stakeholder Management',
        'Continuous Improvement'
      ],
      delay: 1000
    }
  ];

  return (
    <section id="skills" className="w-full py-24 bg-black relative section-grid section-radial">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="Core"
          title={
            <>
              CORE <span className="brand-text">COMPETENCIES</span>
            </>
          }
          subtitle="Strategic expertise and technical proficiency across multiple domains, driving operational excellence and business growth."
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>

        {/* Featured Achievement */}
        <div className="mt-16">
          <div className="glass border border-white/10 border-l-4 border-orange-500 p-12 text-center">
            <div className="text-sm font-bold text-orange-500 mb-4">EXPERTISE FOCUS:</div>
            <div className="text-3xl font-bold text-white mb-4">
              TRANSFORMING CUSTOMER EXPERIENCES THROUGH OPERATIONAL EXCELLENCE
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Combining strategic vision with hands-on execution to deliver measurable results in customer satisfaction, operational efficiency, and business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
