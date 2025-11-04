'use client'

import { useEffect, useState } from 'react'
import { CheckSquare, Circle, Pause, Archive, Plus, Target } from 'lucide-react'

interface Task {
  id: string
  title: string
  status: string
}

interface Goal {
  id: string
  title: string
}

interface Project {
  id: string
  title: string
  desiredOutcome: string
  status: string
  createdAt: string
  updatedAt: string
  completedAt?: string | null
  goal?: Goal | null
  tasks: Task[]
  nextActions: Task[]
}

export default function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/projects')
      if (res.ok) {
        const data = await res.json()
        setProjects(data)
      } else {
        console.error('Failed to load projects:', res.status, res.statusText)
        setProjects([])
      }
    } catch (error) {
      console.error('Failed to load projects:', error)
      setProjects([])
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return <Circle className="h-4 w-4 text-green-600" />
      case 'ON_HOLD':
        return <Pause className="h-4 w-4 text-yellow-600" />
      case 'COMPLETED':
        return <CheckSquare className="h-4 w-4 text-blue-600" />
      default:
        return <Circle className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-green-50 text-green-700 border-green-200'
      case 'ON_HOLD':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200'
      case 'COMPLETED':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200'
    }
  }

  const groupProjectsByStatus = () => {
    const grouped: Record<string, Project[]> = {
      ACTIVE: [],
      ON_HOLD: [],
      COMPLETED: [],
    }

    projects.forEach(project => {
      if (grouped[project.status]) {
        grouped[project.status].push(project)
      } else {
        grouped.ACTIVE.push(project)
      }
    })

    return grouped
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-500">Loading projects...</div>
      </div>
    )
  }

  const grouped = groupProjectsByStatus()

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-1">
            Manage your projects and track desired outcomes
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
          <Plus className="h-5 w-5" />
          New Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <CheckSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
          <p className="text-gray-600 mb-4">
            Create your first project to start organizing your work around clear outcomes.
          </p>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            <Plus className="h-5 w-5" />
            Create Project
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Active Projects */}
          {grouped.ACTIVE.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Circle className="h-5 w-5 text-green-600" />
                Active ({grouped.ACTIVE.length})
              </h2>
              <div className="space-y-4">
                {grouped.ACTIVE.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Outcome:</span> {project.desiredOutcome}
                        </p>
                        {project.goal && (
                          <div className="flex items-center gap-1 text-sm text-purple-600 mb-2">
                            <Target className="h-4 w-4" />
                            {project.goal.title}
                          </div>
                        )}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {project.status.replace('_', ' ')}
                      </span>
                    </div>
                    
                    {project.nextActions.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-xs font-medium text-gray-500 mb-2">Next Actions:</p>
                        <ul className="space-y-1">
                          {project.nextActions.map((action) => (
                            <li key={action.id} className="text-sm text-gray-700 flex items-center gap-2">
                              <Circle className="h-3 w-3 text-gray-400" />
                              {action.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {project.tasks.length > 0 && (
                      <div className="mt-2 text-xs text-gray-500">
                        {project.tasks.length} active task{project.tasks.length !== 1 ? 's' : ''}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* On Hold Projects */}
          {grouped.ON_HOLD.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Pause className="h-5 w-5 text-yellow-600" />
                On Hold ({grouped.ON_HOLD.length})
              </h2>
              <div className="space-y-4">
                {grouped.ON_HOLD.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 opacity-75"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Outcome:</span> {project.desiredOutcome}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {project.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Completed Projects */}
          {grouped.COMPLETED.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckSquare className="h-5 w-5 text-blue-600" />
                Completed ({grouped.COMPLETED.length})
              </h2>
              <div className="space-y-4">
                {grouped.COMPLETED.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 opacity-60"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Outcome:</span> {project.desiredOutcome}
                        </p>
                        {project.completedAt && (
                          <p className="text-xs text-gray-500 mt-1">
                            Completed {new Date(project.completedAt).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {project.status.replace('_', ' ')}
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

