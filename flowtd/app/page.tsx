import { redirect } from 'next/navigation'
import { getServerSessionWithDev } from '@/lib/auth'
import LandingPage from '@/components/landing'

export default async function Home() {
  const session = await getServerSessionWithDev()
  
  if (session) {
    redirect('/dashboard')
  }
  
  return <LandingPage />
}