"use client"

import { useState, useRef } from 'react'
import { CheckCircle2, ChevronDown, Paperclip, Send, X } from 'lucide-react'

const ISSUE_TYPES = [
  'Order not received',
  'Order damaged or defective',
  'Wrong item received',
  'Return / Refund request',
  'Payment issue',
  'Tracking / Shipping query',
  'Product question',
  'Other',
]

interface FormState {
  name: string
  email: string
  orderNumber: string
  issueType: string
  description: string
  file: File | null
}

const empty: FormState = {
  name: '',
  email: '',
  orderNumber: '',
  issueType: '',
  description: '',
  file: null,
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  function set(key: keyof FormState, value: string | File | null) {
    setForm(prev => ({ ...prev, [key]: value }))
    setErrors(prev => ({ ...prev, [key]: undefined }))
  }

  function validate() {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.'
    if (!form.issueType) e.issueType = 'Please select an issue type.'
    if (!form.description.trim() || form.description.length < 10) e.description = 'Please describe your issue (min 10 chars).'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
        <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-brand-primary" strokeWidth={1.5} />
        </div>
        <h2 className="font-poppins text-2xl font-bold text-neutral-900 mb-3">Request Received!</h2>
        <p className="text-neutral-500 max-w-sm leading-relaxed mb-2">
          Thanks, <span className="font-semibold text-neutral-800">{form.name.split(' ')[0]}</span>! We&apos;ve got your message and will respond to <span className="font-semibold text-neutral-800">{form.email}</span> within 24 hours.
        </p>
        <p className="text-sm text-neutral-400 mb-8">Issue type: {form.issueType}</p>
        <button
          onClick={() => { setForm(empty); setSubmitted(false) }}
          className="inline-flex items-center gap-2 bg-brand-primary text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-brand-dark transition-colors"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Row 1 — Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" required error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={e => set('name', e.target.value)}
            placeholder="e.g. Priya Sharma"
            className={inputCls(!!errors.name)}
          />
        </Field>
        <Field label="Email Address" required error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={e => set('email', e.target.value)}
            placeholder="you@example.com"
            className={inputCls(!!errors.email)}
          />
        </Field>
      </div>

      {/* Row 2 — Order number + Issue type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Order Number" hint="Optional">
          <input
            type="text"
            value={form.orderNumber}
            onChange={e => set('orderNumber', e.target.value)}
            placeholder="e.g. #LW-10042"
            className={inputCls(false)}
          />
        </Field>
        <Field label="Issue Type" required error={errors.issueType}>
          <div className="relative">
            <select
              value={form.issueType}
              onChange={e => set('issueType', e.target.value)}
              className={`${inputCls(!!errors.issueType)} appearance-none pr-10 cursor-pointer`}
            >
              <option value="" disabled>Select an issue...</option>
              {ISSUE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          </div>
        </Field>
      </div>

      {/* Description */}
      <Field label="Describe Your Issue" required error={errors.description}>
        <textarea
          value={form.description}
          onChange={e => set('description', e.target.value)}
          placeholder="Please describe what happened in as much detail as possible..."
          rows={5}
          className={`${inputCls(!!errors.description)} resize-none`}
        />
        <p className="mt-1.5 text-xs text-neutral-400 text-right">{form.description.length} / 1000</p>
      </Field>

      {/* File attachment */}
      <Field label="Attach a Photo" hint="Optional · PNG, JPG or PDF up to 5 MB">
        <input
          ref={fileRef}
          type="file"
          accept="image/*,.pdf"
          className="hidden"
          onChange={e => set('file', e.target.files?.[0] ?? null)}
        />
        {form.file ? (
          <div className="flex items-center gap-3 bg-brand-light border border-brand-soft rounded-xl px-4 py-3">
            <Paperclip className="w-4 h-4 text-brand-primary shrink-0" />
            <span className="text-sm text-brand-primary font-medium flex-1 truncate">{form.file.name}</span>
            <button type="button" onClick={() => { set('file', null); if (fileRef.current) fileRef.current.value = '' }} className="text-neutral-400 hover:text-neutral-600">
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="w-full flex items-center gap-3 border-2 border-dashed border-neutral-200 hover:border-brand-soft rounded-xl px-4 py-4 text-sm text-neutral-500 hover:text-brand-primary hover:bg-brand-light transition-all group"
          >
            <div className="w-8 h-8 bg-neutral-100 group-hover:bg-white rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <Paperclip className="w-4 h-4" />
            </div>
            <span>Click to attach a file</span>
          </button>
        )}
      </Field>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-primary hover:bg-brand-dark disabled:opacity-70 text-white font-bold text-base rounded-2xl px-6 py-4 transition-colors duration-200 shadow-md shadow-brand-primary/30"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
              </svg>
              Sending your request...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Request
            </>
          )}
        </button>
      </div>
    </form>
  )
}

function inputCls(hasError: boolean) {
  return [
    'w-full rounded-xl border bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400',
    'focus:outline-none focus:ring-2 transition-all duration-150',
    hasError
      ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
      : 'border-neutral-200 focus:ring-brand-primary/20 focus:border-brand-primary',
  ].join(' ')
}

function Field({
  label,
  required,
  hint,
  error,
  children,
}: {
  label: string
  required?: boolean
  hint?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-neutral-800">
          {label}
          {required && <span className="text-brand-primary ml-0.5">*</span>}
        </label>
        {hint && <span className="text-xs text-neutral-400">{hint}</span>}
      </div>
      {children}
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  )
}
