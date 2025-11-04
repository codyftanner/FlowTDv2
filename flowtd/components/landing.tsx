'use client'

import { signIn } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()
  const isDev = process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_DEV_MODE === 'true'

  useEffect(() => {
    if (isDev) {
      // Auto-redirect to dashboard in dev mode
      router.push('/dashboard')
    }
  }, [isDev, router])

  if (isDev) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center glass-card rounded-2xl px-8 py-6 shadow-xl">
          <p className="text-gray-700">Redirecting to dashboard (dev mode)...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
            FlowTD
          </h1>
          <p className="text-2xl text-gray-800 mb-8 font-medium">
            A trusted extension of your mind
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            Eliminate the gap between having an idea and taking action, 
            while ensuring everything you do connects to what matters most.
          </p>
          
          <button
            onClick={() => signIn('google')}
            className="glass-button text-gray-900 font-semibold py-4 px-10 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Sign in with Google
          </button>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Instant Capture</h3>
            <p className="text-gray-700">
              Catch any thought in under 5 seconds, anywhere you are
            </p>
          </div>
          
          <div className="glass-card rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Process Once</h3>
            <p className="text-gray-700">
              Make one decision about each item and move on with your day
            </p>
          </div>
          
          <div className="glass-card rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Tasks Meet Time</h3>
            <p className="text-gray-700">
              See what needs doing alongside when you're actually available
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
