'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Inbox, 
  Calendar, 
  Target, 
  CheckSquare, 
  Lightbulb, 
  RefreshCw,
  Focus,
  Menu,
  X,
  Plus
} from 'lucide-react'
import CaptureInput from './capture-input'

const navigation = [
  { name: 'Today', href: '/dashboard', icon: Calendar },
  { name: 'Inbox', href: '/dashboard/inbox', icon: Inbox },
  { name: 'Projects', href: '/dashboard/projects', icon: CheckSquare },
  { name: 'Goals', href: '/dashboard/goals', icon: Target },
  { name: 'Incubator', href: '/dashboard/incubator', icon: Lightbulb },
  { name: 'Weekly Review', href: '/dashboard/review', icon: RefreshCw },
  { name: 'Focus Mode', href: '/dashboard/focus', icon: Focus },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 glass-overlay" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-64 flex-col glass-nav shadow-2xl">
          <div className="flex h-16 items-center justify-between px-4 border-b border-white/20">
            <h1 className="text-xl font-bold text-gray-900">FlowTD</h1>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg glass-button text-gray-700 hover:text-gray-900"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href))
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? 'glass-active text-blue-700'
                      : 'text-gray-700 hover:glass-button'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow glass-nav shadow-2xl border-r border-white/20">
          <div className="flex h-16 items-center px-4 border-b border-white/20">
            <h1 className="text-xl font-bold text-gray-900">FlowTD</h1>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href))
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? 'glass-active text-blue-700'
                      : 'text-gray-700 hover:glass-button'
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        {/* Top bar with capture */}
        <div className="sticky top-0 z-10 glass-nav border-b border-white/20 shadow-lg">
          <div className="flex h-16 items-center px-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg glass-button text-gray-700 hover:text-gray-900"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-1 max-w-2xl mx-auto">
              <CaptureInput />
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

