/**
 * Education and certifications section with modern card design
 * Updated to standardized SectionHeader and glass cards
 */
import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, FileCheck } from 'lucide-react';
import SectionHeader from './common/SectionHeader';

interface EducationItemProps {
  type: 'education' | 'certification';
  title: string;
  institution: string;
  period: string;
  location?: string;
  grade?: string;
  description?: string;
  delay: number;
}

/**
 * Individual education/certification item component
 */
function EducationItem({ type, title, institution, period, location, grade, description, delay }: EducationItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={itemRef}
      className={`transform transition-all duration-700 hover:scale-105 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div
        className={`relative p-8 rounded-2xl transition-all duration-300 border glass border-white/10 group ${
          type === 'education'
            ? 'border-l-4 border-orange-500/80'
            : 'border-l-4 border-orange-500/60'
        }`}
      >
        {/* Header */}
        <div className="flex items-start gap-6 mb-6">
          <div className="p-3 rounded-xl bg-orange-500/20">
            {type === 'education' ? (
              <GraduationCap className="w-6 h-6 text-orange-500" />
            ) : (
              <FileCheck className="w-6 h-6 text-orange-500" />
            )}
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
              {title}
            </h3>

            <div className="flex items-center gap-2 text-orange-400 font-semibold mb-2">
              <BookOpen className="w-4 h-4" />
              {institution}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {period}
              </div>
              {location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {location}
                </div>
              )}
              {grade && (
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  Grade: {grade}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        {description && (
          <div className="pl-16">
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>
        )}

        {/* Decorative Element */}
        <div
          className={`absolute top-4 right-4 w-2 h-2 rounded-full ${
            type === 'education' ? 'bg-orange-500' : 'bg-orange-400'
          } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        ></div>
      </div>
    </div>
  );
}

export default function EducationSection() {
  const educationData = [
    {
      type: 'education' as const,
      title: 'Bachelor of Laws (LL.B.), English Section',
      institution: 'Ain Shams University',
      period: '2005 - 2009',
      location: 'Cairo, Egypt',
      grade: 'Good',
      description: 'Comprehensive legal education with focus on international law and business regulations. Developed strong analytical and communication skills that proved valuable in operations management.',
      delay: 0
    },
    {
      type: 'education' as const,
      title: 'GSCE, High School Diploma – Language Track',
      institution: 'Atef Barakat Experimental Language School',
      period: '2002 - 2005',
      location: 'Egypt',
      grade: '92%',
      description: 'Strong foundation in languages and international curriculum, fostering global perspective and communication skills.',
      delay: 200
    }
  ];

  const certifications = [
    {
      type: 'certification' as const,
      title: 'Six Sigma: Black Belt',
      institution: 'LinkedIn Learning',
      period: '2025',
      description: 'Advanced process improvement methodology for operational excellence and quality management.',
      delay: 400
    },
    {
      type: 'certification' as const,
      title: 'Lean Six Sigma Foundations',
      institution: 'LinkedIn Learning',
      period: '2025',
      description: 'Foundational principles of lean manufacturing and process optimization.',
      delay: 500
    },
    {
      type: 'certification' as const,
      title: 'Project Management Skills for Leaders',
      institution: 'LinkedIn Learning',
      period: '2024',
      description: 'Leadership-focused project management methodologies and team coordination strategies.',
      delay: 600
    },
    {
      type: 'certification' as const,
      title: 'Customer Experience (CX) Strategy',
      institution: 'LinkedIn Learning',
      period: '2024',
      description: 'Strategic approach to customer experience design and implementation.',
      delay: 700
    },
    {
      type: 'certification' as const,
      title: 'Microsoft Power BI Data Analyst',
      institution: 'Microsoft',
      period: '2024',
      description: 'Advanced data analysis and visualization using Power BI for business intelligence.',
      delay: 800
    }
  ];

  return (
    <section
      id="education"
      className="w-full py-24 bg-black relative overflow-hidden section-grid section-radial"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="Education & Learning"
          title={
            <>
              Education &amp; <span className="brand-text">Certifications</span>
            </>
          }
          align="center"
          subtitle="Continuous learning and professional development to stay at the forefront of industry best practices"
        />

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Academic Background</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((item, index) => (
              <EducationItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <EducationItem key={index} {...cert} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="brand-gradient text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
          >
            <Award className="w-5 h-5" />
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
}
