'use client'

import { useEffect, useState } from 'react'
import { Calendar, CheckCircle2, Clock, AlertCircle, Zap, ChevronDown, ChevronUp } from 'lucide-react'
import ContextFilter from './context-filter'

interface Task {
  id: string
  title: string
  notes?: string | null
  status: string
  dueDate?: string | null
  plannedStart?: string | null
  isWaiting?: boolean
  waitingOn?: string | null
  contexts?: string | null
  energyLevel?: string | null
  timeBlock?: string | null
  project?: {
    id: string
    title: string
  } | null
}

interface Section {
  id: string
  title: string
  icon: any
  items: Task[]
  emptyMessage: string
}

export default function TodayView() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set())
  const [selectedContexts, setSelectedContexts] = useState<string[]>([])
  const [selectedEnergy, setSelectedEnergy] = useState<string>('')
  const [selectedTimeBlock, setSelectedTimeBlock] = useState<string>('')

  useEffect(() => {
    loadTodayTasks()
  }, [selectedContexts, selectedEnergy, selectedTimeBlock])

  const loadTodayTasks = async () => {
    try {
      // Build query params
      const params = new URLSearchParams()
      if (selectedContexts.length > 0) {
        params.append('contexts', selectedContexts.join(','))
      }
      if (selectedEnergy) {
        params.append('energyLevel', selectedEnergy)
      }
      if (selectedTimeBlock) {
        params.append('timeBlock', selectedTimeBlock)
      }

      const url = `/api/tasks/today${params.toString() ? `?${params.toString()}` : ''}`
      const res = await fetch(url)
      if (res.ok) {
        const data = await res.json()
        setTasks(data)
      }
    } catch (error) {
      console.error('Failed to load today tasks:', error)
    } finally {
      setLoading(false)
    }
  }

  const today = new Date()
  const todayStart = new Date(today.setHours(0, 0, 0, 0))
  const todayEnd = new Date(today.setHours(23, 59, 59, 999))

  // Organize tasks into sections
  const getSections = (): Section[] => {
    const now = new Date()
    const todayStr = now.toISOString().split('T')[0]

    // Calendar Events (placeholder - would come from calendar API)
    const calendarEvents: Task[] = []

    // Active Tasks (with planned start today)
    const activeTasks = tasks.filter(t => {
      if (!t.plannedStart) return false
      const plannedDate = new Date(t.plannedStart).toISOString().split('T')[0]
      return plannedDate === todayStr && t.status !== 'COMPLETED'
    })

    // Due/Overdue Tasks
    const dueTasks = tasks.filter(t => {
      if (!t.dueDate || t.status === 'COMPLETED') return false
      const due = new Date(t.dueDate)
      const dueDate = due.toISOString().split('T')[0]
      const isOverdue = due < new Date(new Date().setHours(0, 0, 0, 0))
      const isDueToday = dueDate === todayStr
      return isOverdue || isDueToday
    }).sort((a, b) => {
      const aDate = a.dueDate ? new Date(a.dueDate).getTime() : 0
      const bDate = b.dueDate ? new Date(b.dueDate).getTime() : 0
      return aDate - bDate // Overdue first
    })

    // Waiting On Tasks
    const waitingTasks = tasks.filter(t => 
      t.isWaiting && t.status !== 'COMPLETED'
    )

    // Next Actions (suggested - all pending next actions)
    const nextActions = tasks.filter(t => 
      t.status === 'PENDING' && !t.dueDate && !t.plannedStart && !t.isWaiting
    ).slice(0, 5) // Limit to 5 suggestions

    // Quick Wins
    const quickWins = tasks.filter(t => {
      return t.status === 'PENDING' && !t.dueDate && !t.plannedStart && !t.isWaiting && t.timeBlock === 'QUICK_WIN'
    }).slice(0, 5)

    return [
      {
        id: 'calendar',
        title: 'Calendar Events',
        icon: Calendar,
        items: calendarEvents,
        emptyMessage: 'No events scheduled for today',
      },
      {
        id: 'active',
        title: 'Active Tasks',
        icon: CheckCircle2,
        items: activeTasks,
        emptyMessage: 'No tasks planned for today',
      },
      {
        id: 'due',
        title: dueTasks.some(t => t.dueDate && new Date(t.dueDate) < new Date(new Date().setHours(0, 0, 0, 0))) 
          ? 'Due / Overdue' 
          : 'Due Today',
        icon: AlertCircle,
        items: dueTasks,
        emptyMessage: 'Nothing due today',
      },
      {
        id: 'waiting',
        title: 'Waiting On',
        icon: Clock,
        items: waitingTasks,
        emptyMessage: 'Nothing waiting on others',
      },
      {
        id: 'suggested',
        title: 'Suggested Next Actions',
        icon: CheckCircle2,
        items: nextActions,
        emptyMessage: 'No suggested actions',
      },
      {
        id: 'quickwins',
        title: 'Quick Wins',
        icon: Zap,
        items: quickWins,
        emptyMessage: 'No quick wins available',
      },
    ]
  }

  const toggleSection = (sectionId: string) => {
    setCollapsedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId)
      } else {
        newSet.add(sectionId)
      }
      return newSet
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-500">Loading today's tasks...</div>
      </div>
    )
  }

  const sections = getSections()
  const visibleSections = sections.filter(s => s.items.length > 0 || s.id === 'calendar')

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Today</h1>
        <p className="text-gray-600 mt-1">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <ContextFilter
        selectedContexts={selectedContexts}
        onContextsChange={setSelectedContexts}
        selectedEnergy={selectedEnergy}
        onEnergyChange={setSelectedEnergy}
        selectedTimeBlock={selectedTimeBlock}
        onTimeBlockChange={setSelectedTimeBlock}
      />

      {visibleSections.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <div className="text-gray-400 mb-4">
            <CheckCircle2 className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Nothing scheduled for today</h3>
          <p className="text-gray-600">
            Your day is clear! Check your projects or inbox for things to work on.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {visibleSections.map((section) => {
            const Icon = section.icon
            const isCollapsed = collapsedSections.has(section.id)
            const isOverdue = section.id === 'due' && section.items.some(t => 
              t.dueDate && new Date(t.dueDate) < new Date(new Date().setHours(0, 0, 0, 0))
            )

            return (
              <div key={section.id} className="bg-white rounded-lg border border-gray-200">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${
                      isOverdue ? 'text-red-600' : 
                      section.id === 'calendar' ? 'text-blue-600' : 
                      'text-gray-600'
                    }`} />
                    <h2 className={`text-lg font-semibold ${
                      isOverdue ? 'text-red-600' : 'text-gray-900'
                    }`}>
                      {section.title}
                    </h2>
                    {section.items.length > 0 && (
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {section.items.length}
                      </span>
                    )}
                  </div>
                  {isCollapsed ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {!isCollapsed && (
                  <div className="px-4 pb-4">
                    {section.items.length === 0 ? (
                      <p className="text-gray-500 text-sm py-4">{section.emptyMessage}</p>
                    ) : (
                      <div className="space-y-2">
                        {section.items.map((task) => {
                          const isTaskOverdue = task.dueDate && new Date(task.dueDate) < new Date(new Date().setHours(0, 0, 0, 0))
                          
                          return (
                            <div
                              key={task.id}
                              className={`p-3 rounded-lg border ${
                                isTaskOverdue 
                                  ? 'border-red-200 bg-red-50' 
                                  : 'border-gray-200 bg-gray-50'
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-medium text-gray-900">{task.title}</h3>
                                    {isTaskOverdue && (
                                      <span className="text-xs text-red-600 bg-red-100 px-2 py-0.5 rounded">
                                        Overdue
                                      </span>
                                    )}
                                  </div>
                                  {task.notes && (
                                    <p className="text-sm text-gray-600 mb-2">{task.notes}</p>
                                  )}
                                  <div className="flex flex-wrap gap-2">
                                    {task.project && (
                                      <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                        {task.project.title}
                                      </div>
                                    )}
                                    {task.contexts && task.contexts.split(',').map((ctx, idx) => (
                                      <span key={idx} className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded">
                                        {ctx.trim()}
                                      </span>
                                    ))}
                                    {task.energyLevel && (
                                      <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">
                                        {task.energyLevel === 'HIGH' ? '⚡ High Energy' : '🪫 Low Energy'}
                                      </span>
                                    )}
                                    {task.timeBlock && (
                                      <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                                        {task.timeBlock === 'QUICK_WIN' ? '<15m' : 
                                         task.timeBlock === 'FOCUSED' ? '15-60m' : 
                                         '>1h'}
                                      </span>
                                    )}
                                    {task.waitingOn && (
                                      <div className="text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded">
                                        Waiting on: {task.waitingOn}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
