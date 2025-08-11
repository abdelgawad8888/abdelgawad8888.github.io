/**
 * Navigation component with smooth scrolling
 * Updated: Glassy bar with active underline indicator and Case Studies link
 */
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

/**
 * Navigation
 * Provides sticky top navigation with active section highlighting
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('overview')

  /**
   * Smooth scroll to a section
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  /**
   * Observe and set current active section based on scroll
   */
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'overview',
        'milestones',
        'strategies',
        'cases',
        'platform',
        'roadmap',
        'experience',
        'skills',
        'education',
        'whats-next',
        'contact',
      ]
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'milestones', label: 'Highlights' },
    { id: 'strategies', label: 'Focus' },
    { id: 'cases', label: 'Case Studies' },
    { id: 'platform', label: 'Deep Dive' },
    { id: 'roadmap', label: 'Timeline' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'whats-next', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/65 backdrop-blur-md border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">AE</span>
              </div>
              <span className="ml-3 text-white font-semibold text-lg">Ahmed Essmat</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-link text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.id ? 'text-orange-500 active' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'text-white bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16" />
    </>
  )
}
