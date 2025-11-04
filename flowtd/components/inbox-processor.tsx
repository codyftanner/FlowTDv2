'use client'

import { useEffect, useState } from 'react'
import { CheckCircle2, Clock, AlertCircle, Trash2, Plus, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface InboxItem {
  id: string
  title: string
  notes?: string
  source: string
  capturedAt: string
}

const ACTION_KEYS: Record<string, string> = {
  'd': 'do',
  'n': 'next',
  'l': 'later',
  'w': 'waiting',
  'p': 'project',
  'del': 'delete',
  'Delete': 'delete',
}

export default function InboxProcessor() {
  const [items, setItems] = useState<InboxItem[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)
  const router = useRouter()

  useEffect(() => {
    loadInboxItems()
  }, [])

  const loadInboxItems = async () => {
    try {
      const response = await fetch('/api/inbox')
      if (response.ok) {
        const data = await response.json()
        setItems(data)
      }
    } catch (error) {
      console.error('Failed to load inbox items:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAction = async (action: string) => {
    if (processing || currentIndex >= items.length) return

    setProcessing(true)
    const currentItem = items[currentIndex]

    try {
      const response = await fetch('/api/inbox/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          inboxItemId: currentItem.id,
          action,
        }),
      })

      if (response.ok) {
        // Move to next item
        if (currentIndex < items.length - 1) {
          setCurrentIndex(currentIndex + 1)
        } else {
          // All items processed
          router.push('/dashboard')
        }
      }
    } catch (error) {
      console.error('Failed to process item:', error)
    } finally {
      setProcessing(false)
    }
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    if (processing) return
    
    const key = e.key
    const action = ACTION_KEYS[key]
    
    if (action && currentIndex < items.length) {
      e.preventDefault()
      handleAction(action)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress as any)
    return () => window.removeEventListener('keydown', handleKeyPress as any)
  }, [currentIndex, items, processing])

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-64"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  const currentItem = items[currentIndex]
  const remainingCount = items.length - currentIndex

  if (!currentItem) {
    return (
      <div className="p-6">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Inbox Zero! 🎉</h2>
          <p className="text-gray-600 mb-6">All items processed</p>
          <button
            onClick={() => router.push('/dashboard')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-gray-900">Process Inbox</h1>
            <span className="text-sm font-medium text-gray-600">
              {remainingCount} remaining
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${((items.length - remainingCount) / items.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Current Item */}
        <div className="bg-white rounded-lg border-2 border-blue-500 shadow-lg p-6 mb-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900">{currentItem.title}</h2>
            {currentItem.notes && (
              <p className="text-gray-600 mt-2">{currentItem.notes}</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleAction('do')}
              disabled={processing}
              className="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
            >
              <CheckCircle2 className="h-5 w-5" />
              Do It Now
              <span className="text-xs opacity-60">(D)</span>
            </button>

            <button
              onClick={() => handleAction('next')}
              disabled={processing}
              className="flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
            >
              <ExternalLink className="h-5 w-5" />
              Next Action
              <span className="text-xs opacity-60">(N)</span>
            </button>

            <button
              onClick={() => handleAction('later')}
              disabled={processing}
              className="flex items-center justify-center gap-2 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
            >
              <Clock className="h-5 w-5" />
              Later
              <span className="text-xs opacity-60">(L)</span>
            </button>

            <button
              onClick={() => handleAction('waiting')}
              disabled={processing}
              className="flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
            >
              <AlertCircle className="h-5 w-5" />
              Waiting
              <span className="text-xs opacity-60">(W)</span>
            </button>

            <button
              onClick={() => handleAction('project')}
              disabled={processing}
              className="flex items-center justify-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
            >
              <Plus className="h-5 w-5" />
              Project
              <span className="text-xs opacity-60">(P)</span>
            </button>

            <button
              onClick={() => handleAction('delete')}
              disabled={processing}
              className="flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-700 font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
            >
              <Trash2 className="h-5 w-5" />
              Delete
              <span className="text-xs opacity-60">(Del)</span>
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            Use keyboard shortcuts or click buttons to process each item. 
            Each action fully handles the item—no revisiting needed.
          </p>
        </div>
      </div>
    </div>
  )
}

