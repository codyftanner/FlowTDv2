import { redirect } from 'next/navigation'
import { getServerSessionWithDev } from '@/lib/auth'
import DashboardLayout from '@/components/dashboard-layout'
import IncubatorList from '@/components/incubator-list'

export default async function IncubatorPage() {
  const session = await getServerSessionWithDev()
  
  if (!session) {
    redirect('/')
  }
  
  return (
    <DashboardLayout>
      <IncubatorList />
    </DashboardLayout>
  )
}
