'use client'

import { useEffect, useState } from 'react'
import { Target, CheckCircle2, Plus, TrendingUp } from 'lucide-react'

interface Project {
  id: string
  title: string
  status: string
}

interface Goal {
  id: string
  horizon: string
  title: string
  description?: string | null
  successCriteria?: string | null
  targetDate?: string | null
  isCompleted: boolean
  completedAt?: string | null
  createdAt: string
  projects: Project[]
}

const HORIZON_LABELS: Record<string, { label: string; order: number; color: string }> = {
  PURPOSE: { label: 'Purpose & Values', order: 1, color: 'text-purple-700 bg-purple-50 border-purple-200' },
  THREE_TO_FIVE_YEAR: { label: '3-5 Year Vision', order: 2, color: 'text-blue-700 bg-blue-50 border-blue-200' },
  ONE_TO_TWO_YEAR: { label: '1-2 Year Goals', order: 3, color: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
  QUARTERLY: { label: 'Quarterly Objectives', order: 4, color: 'text-green-700 bg-green-50 border-green-200' },
}

export default function GoalsList() {
  const [goals, setGoals] = useState<Goal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadGoals()
  }, [])

  const loadGoals = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/goals')
      if (res.ok) {
        const data = await res.json()
        setGoals(data)
      } else {
        console.error('Failed to load goals:', res.status, res.statusText)
        setGoals([])
      }
    } catch (error) {
      console.error('Failed to load goals:', error)
      setGoals([])
    } finally {
      setLoading(false)
    }
  }

  const groupGoalsByHorizon = () => {
    const grouped: Record<string, Goal[]> = {
      PURPOSE: [],
      THREE_TO_FIVE_YEAR: [],
      ONE_TO_TWO_YEAR: [],
      QUARTERLY: [],
    }

    goals.forEach(goal => {
      if (!goal.isCompleted && grouped[goal.horizon]) {
        grouped[goal.horizon].push(goal)
      }
    })

    return grouped
  }

  const completedGoals = goals.filter(g => g.isCompleted)

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-500">Loading goals...</div>
      </div>
    )
  }

  const grouped = groupGoalsByHorizon()
  const activeGoals = goals.filter(g => !g.isCompleted)

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Goals & Horizons</h1>
          <p className="text-gray-600 mt-1">
            Connect your daily work to what matters most across all time horizons
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
          <Plus className="h-5 w-5" />
          New Goal
        </button>
      </div>

      {activeGoals.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No goals yet</h3>
          <p className="text-gray-600 mb-4">
            Define your goals across different time horizons to align your daily work with long-term vision.
          </p>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            <Plus className="h-5 w-5" />
            Create Goal
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Render each horizon in order */}
          {Object.entries(HORIZON_LABELS)
            .sort(([, a], [, b]) => a.order - b.order)
            .map(([horizonKey, horizonData]) => {
              const horizonGoals = grouped[horizonKey]
              if (horizonGoals.length === 0) return null

              return (
                <div key={horizonKey}>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-gray-600" />
                    {horizonData.label} ({horizonGoals.length})
                  </h2>
                  <div className="space-y-4">
                    {horizonGoals.map((goal) => (
                      <div
                        key={goal.id}
                        className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {goal.title}
                            </h3>
                            {goal.description && (
                              <p className="text-sm text-gray-600 mb-2">
                                {goal.description}
                              </p>
                            )}
                            {goal.successCriteria && (
                              <p className="text-sm text-gray-700 mb-2">
                                <span className="font-medium">Success:</span> {goal.successCriteria}
                              </p>
                            )}
                            {goal.targetDate && (
                              <p className="text-xs text-gray-500">
                                Target: {new Date(goal.targetDate).toLocaleDateString()}
                              </p>
                            )}
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${horizonData.color}`}>
                            {horizonData.label}
                          </span>
                        </div>
                        
                        {goal.projects.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-xs font-medium text-gray-500 mb-2">Active Projects:</p>
                            <ul className="space-y-1">
                              {goal.projects.map((project) => (
                                <li key={project.id} className="text-sm text-gray-700 flex items-center gap-2">
                                  <Target className="h-3 w-3 text-gray-400" />
                                  {project.title}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}

          {/* Completed Goals */}
          {completedGoals.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Completed ({completedGoals.length})
              </h2>
              <div className="space-y-4">
                {completedGoals.map((goal) => (
                  <div
                    key={goal.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 opacity-60"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {goal.title}
                        </h3>
                        {goal.description && (
                          <p className="text-sm text-gray-600 mb-2">
                            {goal.description}
                          </p>
                        )}
                        {goal.completedAt && (
                          <p className="text-xs text-gray-500 mt-1">
                            Completed {new Date(goal.completedAt).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${HORIZON_LABELS[goal.horizon]?.color || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                        {HORIZON_LABELS[goal.horizon]?.label || goal.horizon}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

