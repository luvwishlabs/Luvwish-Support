"use client"

import { useState, useEffect, useRef } from 'react'
import { Search } from 'lucide-react'
import { articles } from '@/data/articles'
import { searchArticles } from '@/lib/search'
import { SearchResults } from './SearchResults'

interface SearchBarProps {
  autoFocus?: boolean
}

export function SearchBar({ autoFocus = false }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const results = searchArticles(query, articles)

  // Auto-focus on mount
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  // Close dropdown on outside click or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        inputRef.current?.blur()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            if (e.target.value.length > 1) {
              setIsOpen(true)
            } else {
              setIsOpen(false)
            }
          }}
          onFocus={() => {
            if (query.length > 1) setIsOpen(true)
          }}
          placeholder="Search (orders, refunds, shipping...)"
          className="w-full pl-12 pr-4 py-4 rounded-xl border border-neutral-200 bg-white text-base shadow-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
          autoComplete="off"
        />
      </div>

      {isOpen && (query.length > 1) && (
        <SearchResults query={query} results={results} onClose={() => setIsOpen(false)} />
      )}
    </div>
  )
}
