"use client"

import { useState } from 'react'
import { ThumbsUp, ThumbsDown, Heart } from 'lucide-react'
import Link from 'next/link'

type FeedbackState = 'idle' | 'helpful' | 'not-helpful'

export function FeedbackWidget() {
  const [state, setState] = useState<FeedbackState>('idle')

  return (
    <div className="mt-12 pt-8 border-t border-neutral-200">
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${state === 'idle' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <h3 className="font-inter text-lg font-semibold text-neutral-900 mb-4">
          Was this article helpful?
        </h3>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setState('helpful')}
            className="flex items-center gap-2 bg-white border border-neutral-200 hover:border-brand-soft hover:bg-brand-light text-neutral-700 hover:text-brand-primary rounded-full px-6 py-2.5 text-sm font-medium transition-colors"
          >
            <ThumbsUp className="w-4 h-4" />
            Yes, this helped
          </button>
          
          <button
            onClick={() => setState('not-helpful')}
            className="flex items-center gap-2 bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-neutral-700 rounded-full px-6 py-2.5 text-sm font-medium transition-colors"
          >
            <ThumbsDown className="w-4 h-4" />
            Not really
          </button>
        </div>
      </div>

      <div className={`transition-all duration-300 ease-in-out ${state === 'idle' ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100 mt-2'}`}>
        {state === 'helpful' && (
          <div className="bg-brand-light border border-brand-soft rounded-xl p-6 text-center shadow-sm">
            <Heart className="w-8 h-8 text-brand-primary mx-auto mb-3" />
            <h3 className="text-brand-dark font-medium mb-1">Thank you! We&apos;re glad this helped.</h3>
            <p className="text-sm text-brand-primary/80">Your feedback helps us support more women better.</p>
          </div>
        )}
        
        {state === 'not-helpful' && (
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 text-center text-neutral-700 shadow-sm">
            <h3 className="font-medium mb-2">Thanks for the feedback.</h3>
            <p className="text-sm mb-4">We&apos;re sorry this article didn&apos;t fully answer your question. Our care team is always ready to assist you.</p>
            <Link 
              href="/contact-support"
              className="inline-block bg-neutral-900 text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-neutral-700 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
