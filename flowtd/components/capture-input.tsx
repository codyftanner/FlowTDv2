'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function CaptureInput() {
  const [value, setValue] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!value.trim() || isSubmitting) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/inbox/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: value.trim() }),
      })

      if (response.ok) {
        setValue('')
        // TODO: Show success feedback
      }
    } catch (error) {
      console.error('Failed to capture:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 glass-card rounded-2xl px-4 py-2 shadow-lg">
      <button
        type="button"
        className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:glass-button transition-all"
      >
        <Plus className="h-5 w-5" />
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 text-sm py-2 px-3 bg-transparent border-0 focus:outline-none focus:ring-0 text-gray-900 placeholder:text-gray-500"
        disabled={isSubmitting}
      />
      <div className="text-xs text-gray-500 px-2">
        Press Enter to capture
      </div>
    </form>
  )
}

