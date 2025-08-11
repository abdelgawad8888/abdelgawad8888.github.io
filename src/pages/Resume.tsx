/**
 * Resume page
 * Renders the provided standalone HTML resume inside an iframe
 * to preserve its self-contained styles and layout.
 */
import React from 'react'
import { getPublicAssetUrl } from '../lib/publicPath'

/**
 * Resume
 * Displays the resume HTML from the public file
 */
export default function Resume(): JSX.Element {
  return (
    <div className="min-h-screen surface-deep pt-4 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full header-eyebrow">
            <span className="text-[11px] font-bold tracking-wider uppercase text-blue-400">
              Resume
            </span>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">
            Full Resume (HTML)
          </h1>
          <p className="mt-2 text-gray-400">
            This HTML view uses a clean neutral accent. Use the bar below to Save as PDF.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden border border-white/10 glass">
          {/* Keep a reasonable viewport height; account for fixed nav spacer on home */}
          <iframe
            src={getPublicAssetUrl('resume.html')}
            className="w-full h-[80vh] bg-white"
            title="Ahmed Essmat Resume"
          />
        </div>
      </div>
    </div>
  )
}
