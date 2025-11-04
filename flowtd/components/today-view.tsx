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
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 drop-shadow-lg">Today</h1>
        <p className="text-gray-700 text-lg font-medium">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <div className="mb-6">
        <ContextFilter
          selectedContexts={selectedContexts}
          onContextsChange={setSelectedContexts}
          selectedEnergy={selectedEnergy}
          onEnergyChange={setSelectedEnergy}
          selectedTimeBlock={selectedTimeBlock}
          onTimeBlockChange={setSelectedTimeBlock}
        />
      </div>

      {visibleSections.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center shadow-xl">
          <div className="text-gray-500 mb-4">
            <CheckCircle2 className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Nothing scheduled for today</h3>
          <p className="text-gray-700">
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
              <div key={section.id} className="glass-card rounded-2xl shadow-xl overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-5 hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${
                      isOverdue ? 'text-red-600' : 
                      section.id === 'calendar' ? 'text-blue-600' : 
                      'text-gray-700'
                    }`} />
                    <h2 className={`text-lg font-semibold ${
                      isOverdue ? 'text-red-600' : 'text-gray-900'
                    }`}>
                      {section.title}
                    </h2>
                    {section.items.length > 0 && (
                      <span className="text-sm text-gray-700 glass-button px-3 py-1 rounded-full">
                        {section.items.length}
                      </span>
                    )}
                  </div>
                  {isCollapsed ? (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {!isCollapsed && (
                  <div className="px-5 pb-5">
                    {section.items.length === 0 ? (
                      <p className="text-gray-600 text-sm py-4">{section.emptyMessage}</p>
                    ) : (
                      <div className="space-y-3">
                        {section.items.map((task) => {
                          const isTaskOverdue = task.dueDate && new Date(task.dueDate) < new Date(new Date().setHours(0, 0, 0, 0))
                          
                          return (
                            <div
                              key={task.id}
                              className={`glass rounded-xl p-4 border ${
                                isTaskOverdue 
                                  ? 'border-red-300/50 bg-red-50/50' 
                                  : 'border-white/30 bg-white/40'
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-medium text-gray-900">{task.title}</h3>
                                    {isTaskOverdue && (
                                      <span className="text-xs text-red-700 glass-button px-2 py-0.5 rounded-full bg-red-100/50">
                                        Overdue
                                      </span>
                                    )}
                                  </div>
                                  {task.notes && (
                                    <p className="text-sm text-gray-700 mb-2">{task.notes}</p>
                                  )}
                                  <div className="flex flex-wrap gap-2">
                                    {task.project && (
                                      <div className="text-xs text-blue-700 glass-button px-2 py-1 rounded-full bg-blue-100/50">
                                        {task.project.title}
                                      </div>
                                    )}
                                    {task.contexts && task.contexts.split(',').map((ctx, idx) => (
                                      <span key={idx} className="text-xs text-purple-700 glass-button px-2 py-1 rounded-full bg-purple-100/50">
                                        {ctx.trim()}
                                      </span>
                                    ))}
                                    {task.energyLevel && (
                                      <span className="text-xs text-orange-700 glass-button px-2 py-1 rounded-full bg-orange-100/50">
                                        {task.energyLevel === 'HIGH' ? '⚡ High Energy' : '🪫 Low Energy'}
                                      </span>
                                    )}
                                    {task.timeBlock && (
                                      <span className="text-xs text-green-700 glass-button px-2 py-1 rounded-full bg-green-100/50">
                                        {task.timeBlock === 'QUICK_WIN' ? '<15m' : 
                                         task.timeBlock === 'FOCUSED' ? '15-60m' : 
                                         '>1h'}
                                      </span>
                                    )}
                                    {task.waitingOn && (
                                      <div className="text-xs text-yellow-700 glass-button px-2 py-1 rounded-full bg-yellow-100/50">
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
