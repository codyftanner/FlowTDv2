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
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="glass-card rounded-2xl p-8 text-center">
          <p className="text-gray-600">Redirecting to dashboard (dev mode)...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="glass-card rounded-3xl p-12 mb-8 inline-block">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              FlowTD
            </h1>
            <p className="text-2xl text-gray-700 mb-8 font-medium">
              A trusted extension of your mind
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Eliminate the gap between having an idea and taking action, 
              while ensuring everything you do connects to what matters most.
            </p>
            
            <button
              onClick={() => signIn('google')}
              className="glass-button text-white font-semibold py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105"
            >
              Sign in with Google
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Instant Capture</h3>
            <p className="text-gray-600">
              Catch any thought in under 5 seconds, anywhere you are
            </p>
          </div>
          
          <div className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Process Once</h3>
            <p className="text-gray-600">
              Make one decision about each item and move on with your day
            </p>
          </div>
          
          <div className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Tasks Meet Time</h3>
            <p className="text-gray-600">
              See what needs doing alongside when you're actually available
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
