/**
 * ResumeBar
 * Compact sticky bottom bar with quick actions:
 * - Save as PDF: opens resume.html in print mode so users get the latest content
 * - View HTML: opens the embedded resume page route
 */
import React from 'react'
import { getPublicAssetUrl } from '../lib/publicPath'
import { FileDown, FileText } from 'lucide-react'

/**
 * ResumeBar component
 * Always visible; ensure it doesn't block content by keeping page bottom padding.
 */
export default function ResumeBar(): JSX.Element {
  /**
   * Open the HTML resume in a new tab and trigger the browser's print dialog
   * Ensures the user saves the most recent resume content as PDF
   */
  const savePdf = (): void => {
    const url = getPublicAssetUrl('resume.html?print=1')
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  /**
   * Open the resume route in the same tab
   */
  const goHtml = (): void => {
    window.location.hash = '#/resume'
  }

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60]">
      <div className="glass border border-white/10 brand-gradient text-white rounded-full shadow-xl">
        <div className="flex items-center gap-2 px-3 py-2">
          {/* Label */}
          <span className="text-xs font-semibold tracking-wide uppercase">
            Resume
          </span>
          {/* Actions */}
          <div className="h-5 w-px bg-white/30 mx-1" />
          <button
            onClick={savePdf}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/15 transition text-white text-sm font-semibold"
            type="button"
          >
            <FileDown className="w-4 h-4" />
            Save as PDF
          </button>
          <button
            onClick={goHtml}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/15 transition text-white text-sm font-semibold"
            type="button"
          >
            <FileText className="w-4 h-4" />
            View HTML
          </button>
        </div>
      </div>
    </div>
  )
}
