'use client'

import { Lightbulb } from 'lucide-react'

export default function IncubatorList() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Incubator</h1>
        <p className="text-gray-600 mt-1">
          Ideas for later - not now, but someday/maybe
        </p>
      </div>

      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <Lightbulb className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Incubator coming soon</h3>
        <p className="text-gray-600">
          This feature will let you store ideas that you're not ready to act on yet.
        </p>
      </div>
    </div>
  )
}

