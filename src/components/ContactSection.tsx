/**
 * Contact section with modern corporate design
 * - Keeps contact info cards
 * - Removes contact form per request
 * - Uses standardized header and glass cards
 */
import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import SectionHeader from './common/SectionHeader';

/**
 * ContactSection
 * Displays contact information and a closing CTA card
 */
export default function ContactSection() {
  /** Navigate to email client */
  const handleEmailClick = () => {
    window.location.href = 'mailto:ahmedabdelgawad8888@gmail.com';
  };

  /** Navigate to phone dialer */
  const handlePhoneClick = () => {
    window.location.href = 'tel:+201024557722';
  };

  /** Open LinkedIn profile */
  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/ahmed-essmat-elsayed', '_blank');
  };

  return (
    <section id="contact" className="w-full py-24 bg-black relative section-grid section-radial">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="Connect"
          title={
            <>
              GET IN <span className="brand-text">TOUCH</span>
            </>
          }
          align="center"
          subtitle="Ready to discuss Customer Success, CX strategy, or collaboration? Let’s connect and drive outcomes together."
        />

        {/* Contact Information Only */}
        <div className="grid grid-cols-1 gap-6">
          {/* Email Card */}
          <div
            onClick={handleEmailClick}
            className="glass lift border border-white/10 border-l-4 border-orange-500 p-6 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-500 text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-white font-bold group-hover:text-orange-500 transition-colors">
                  EMAIL ADDRESS
                </div>
                <div className="text-gray-400">ahmedabdelgawad8888@gmail.com</div>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div
            onClick={handlePhoneClick}
            className="glass lift border border-white/10 border-l-4 border-orange-500 p-6 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-500 text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-white font-bold group-hover:text-orange-500 transition-colors">
                  PHONE NUMBER
                </div>
                <div className="text-gray-400">+20 1024557722</div>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div
            onClick={handleLinkedInClick}
            className="glass lift border border-white/10 border-l-4 border-orange-500 p-6 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-500 text-white">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-white font-bold group-hover:text-orange-500 transition-colors">
                  LINKEDIN PROFILE
                </div>
                <div className="text-gray-400">linkedin.com/in/ahmed-essmat-elsayed</div>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass border border-white/10 border-l-4 border-orange-500 p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-500 text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-white font-bold">LOCATION</div>
                <div className="text-gray-400">Cairo, Egypt</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-white/10 text-center">
          <div className="glass border border-white/10 border-l-4 border-orange-500 p-8 max-w-4xl mx-auto">
            <div className="text-sm font-bold text-orange-500 mb-4">READY TO COLLABORATE?</div>
            <div className="text-2xl font-bold text-white">
              LET'S TRANSFORM YOUR CUSTOMER EXPERIENCE TOGETHER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
