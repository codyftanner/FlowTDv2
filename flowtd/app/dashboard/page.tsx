import { redirect } from 'next/navigation'
import { getServerSessionWithDev } from '@/lib/auth'
import DashboardLayout from '@/components/dashboard-layout'
import TodayView from '@/components/today-view'

export default async function DashboardPage() {
  const session = await getServerSessionWithDev()
  
  if (!session) {
    redirect('/')
  }
  
  return (
    <DashboardLayout>
      <TodayView />
    </DashboardLayout>
  )
}

