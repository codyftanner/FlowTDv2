'use client'

import { Focus } from 'lucide-react'

export default function FocusMode() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Focus Mode</h1>
        <p className="text-gray-600 mt-1">
          Tackle quick wins with focused time
        </p>
      </div>

      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <Focus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Focus Mode coming soon</h3>
        <p className="text-gray-600">
          This feature will help you power through quick win tasks with a timer.
        </p>
      </div>
    </div>
  )
}

