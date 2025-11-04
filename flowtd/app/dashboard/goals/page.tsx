import { redirect } from 'next/navigation'
import { getServerSessionWithDev } from '@/lib/auth'
import DashboardLayout from '@/components/dashboard-layout'
import GoalsList from '@/components/goals-list'

export default async function GoalsPage() {
  const session = await getServerSessionWithDev()
  
  if (!session) {
    redirect('/')
  }
  
  return (
    <DashboardLayout>
      <GoalsList />
    </DashboardLayout>
  )
}
