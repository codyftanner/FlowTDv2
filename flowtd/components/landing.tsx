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
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Redirecting to dashboard (dev mode)...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            FlowTD
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            A trusted extension of your mind
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Eliminate the gap between having an idea and taking action, 
            while ensuring everything you do connects to what matters most.
          </p>
          
          <button
            onClick={() => signIn('google')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Sign in with Google
          </button>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Instant Capture</h3>
            <p className="text-gray-600">
              Catch any thought in under 5 seconds, anywhere you are
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Process Once</h3>
            <p className="text-gray-600">
              Make one decision about each item and move on with your day
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2">Tasks Meet Time</h3>
            <p className="text-gray-600">
              See what needs doing alongside when you're actually available
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
