'use client'

import { Calendar } from 'lucide-react'

export default function WeeklyReviewWizard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Weekly Review</h1>
        <p className="text-gray-600 mt-1">
          Review your week and plan for the next one
        </p>
      </div>

      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Weekly Review coming soon</h3>
        <p className="text-gray-600">
          This feature will guide you through a structured weekly review process.
        </p>
      </div>
    </div>
  )
}

