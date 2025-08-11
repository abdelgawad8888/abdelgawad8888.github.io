/**
 * SectionHeader
 * Reusable section header with eyebrow, gradient title, and optional subtitle
 */
import React from 'react'

/**
 * SectionHeaderProps
 * Defines the shape of props for the section header
 */
export interface SectionHeaderProps {
  /** Tiny label above the title (e.g., "Outcomes", "Capabilities") */
  eyebrow?: string
  /** Main title; can include spans for accent text */
  title: React.ReactNode
  /** Optional subtitle/description under the title */
  subtitle?: React.ReactNode
  /** Text alignment: left or center */
  align?: 'left' | 'center'
  /** Additional className for the wrapper */
  className?: string
}

/**
 * SectionHeader
 * Standardized header for all sections to ensure consistent aesthetics
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center'
  return (
    <div className={`mb-12 ${className} ${isCenter ? 'text-center' : ''}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full header-eyebrow ${
            isCenter ? '' : ''
          }`}
        >
          <span className="text-[11px] font-bold tracking-wider uppercase text-orange-400">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white ${
          isCenter ? '' : ''
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base md:text-lg text-gray-400 leading-relaxed ${
            isCenter ? 'mx-auto max-w-3xl' : 'max-w-3xl'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-5 ${isCenter ? 'mx-auto' : ''} h-1 w-20 brand-gradient rounded`} />
    </div>
  )
}
