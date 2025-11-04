'use client'

import { useState, useEffect } from 'react'

interface ContextFilterProps {
  selectedContexts: string[]
  onContextsChange: (contexts: string[]) => void
  selectedEnergy: string
  onEnergyChange: (energy: string) => void
  selectedTimeBlock: string
  onTimeBlockChange: (timeBlock: string) => void
}

export default function ContextFilter({
  selectedContexts,
  onContextsChange,
  selectedEnergy,
  onEnergyChange,
  selectedTimeBlock,
  onTimeBlockChange,
}: ContextFilterProps) {
  const [availableContexts, setAvailableContexts] = useState<string[]>([])

  useEffect(() => {
    // Load available contexts from tasks
    const loadContexts = async () => {
      try {
        const res = await fetch('/api/tasks/today')
        if (res.ok) {
          const tasks = await res.json()
          const contexts = new Set<string>()
          tasks.forEach((task: any) => {
            if (task.contexts) {
              task.contexts.split(',').forEach((ctx: string) => {
                if (ctx.trim()) contexts.add(ctx.trim())
              })
            }
          })
          setAvailableContexts(Array.from(contexts).sort())
        }
      } catch (error) {
        console.error('Failed to load contexts:', error)
      }
    }
    loadContexts()
  }, [])

  return (
    <div className="mb-6 flex flex-wrap gap-4 items-center">
      {/* Context Filter */}
      {availableContexts.length > 0 && (
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Context:</label>
          <div className="flex flex-wrap gap-2">
            {availableContexts.map((context) => (
              <button
                key={context}
                onClick={() => {
                  if (selectedContexts.includes(context)) {
                    onContextsChange(selectedContexts.filter(c => c !== context))
                  } else {
                    onContextsChange([...selectedContexts, context])
                  }
                }}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedContexts.includes(context)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {context}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Energy Level Filter */}
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700">Energy:</label>
        <select
          value={selectedEnergy}
          onChange={(e) => onEnergyChange(e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          <option value="HIGH">High</option>
          <option value="LOW">Low</option>
        </select>
      </div>

      {/* Time Block Filter */}
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700">Time:</label>
        <select
          value={selectedTimeBlock}
          onChange={(e) => onTimeBlockChange(e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          <option value="QUICK_WIN">Quick Win (&lt;15m)</option>
          <option value="FOCUSED">Focused (15-60m)</option>
          <option value="DEEP">Deep Work (&gt;1h)</option>
        </select>
      </div>

      {/* Clear Filters */}
      {(selectedContexts.length > 0 || selectedEnergy || selectedTimeBlock) && (
        <button
          onClick={() => {
            onContextsChange([])
            onEnergyChange('')
            onTimeBlockChange('')
          }}
          className="ml-auto px-3 py-1 text-sm text-gray-600 hover:text-gray-900"
        >
          Clear filters
        </button>
      )}
    </div>
  )
}

