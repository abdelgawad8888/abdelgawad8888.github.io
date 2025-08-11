/**
 * Testimonials section with corporate card design
 * Updated to glass cards and standardized header
 */
import React, { useEffect, useRef, useState } from 'react';
import { Quote, Star, Linkedin } from 'lucide-react';
import SectionHeader from './common/SectionHeader';

interface TestimonialProps {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  delay: number;
}

/**
 * Individual testimonial card component
 */
function TestimonialCard({ name, position, company, testimonial, delay }: TestimonialProps) {
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
      <div className="glass lift border border-white/10 border-l-4 border-orange-500 p-8 h-full">
        {/* Quote Icon */}
        <div className="mb-6">
          <Quote className="w-8 h-8 text-orange-500" />
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
          "{testimonial}"
        </p>

        {/* Author Info */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <div className="text-white font-bold">{name}</div>
              <div className="text-orange-500 text-sm font-semibold">{position}</div>
              <div className="text-gray-400 text-sm">{company}</div>
            </div>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1 mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Ola Youssef',
      position: 'Regional Senior Director',
      company: 'NTT Data Inc',
      testimonial: 'Ahmed is a high potential talent with exceptional leadership capabilities. His willingness to improve, taking risks and adjusting to change allows him to progress in his career and deliver outstanding results.',
      delay: 0
    },
    {
      name: 'Namita Sharma',
      position: 'Founder',
      company: 'AI Platform',
      testimonial: 'Ahmed is a dynamic professional with an unwavering commitment to delivering results. His remarkable efficiency and ability to swiftly tackle challenges make him an invaluable asset to any organization.',
      delay: 200
    },
    {
      name: 'Houda Chafki',
      position: 'Group Head of Customer Operations',
      company: 'Jumia Group',
      testimonial: "Ahmed's leadership in launching citywide activations is unmatched—he brings data, people, and process together for flawless execution. His strategic thinking and operational excellence drive measurable business impact.",
      delay: 400
    }
  ];

  return (
    <section id="testimonials" className="w-full py-24 surface-alt relative section-grid section-radial">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="Social Proof"
          title={
            <>
              PROFESSIONAL <span className="brand-text">RECOMMENDATIONS</span>
            </>
          }
          subtitle="Testimonials from senior leaders and industry professionals who observed the outcomes firsthand."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="mt-16 text-center">
          <div className="glass border border-white/10 border-l-4 border-orange-500 p-12 max-w-4xl mx-auto">
            <div className="text-sm font-bold text-orange-500 mb-4">CONNECT WITH ME:</div>
            <div className="text-2xl font-bold text-white mb-6">
              VIEW MORE RECOMMENDATIONS ON LINKEDIN
            </div>
            <button
              onClick={() => window.open('https://linkedin.com/in/ahmed-essmat-elsayed', '_blank')}
              className="brand-gradient text-white px-8 py-4 rounded-md font-bold transition-all duration-300 inline-flex items-center gap-3"
            >
              <Linkedin className="w-5 h-5" />
              VISIT LINKEDIN PROFILE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
