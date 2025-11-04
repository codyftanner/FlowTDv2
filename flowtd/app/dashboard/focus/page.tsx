import { redirect } from 'next/navigation'
import { getServerSessionWithDev } from '@/lib/auth'
import DashboardLayout from '@/components/dashboard-layout'
import FocusMode from '@/components/focus-mode'

export default async function FocusPage() {
  const session = await getServerSessionWithDev()
  
  if (!session) {
    redirect('/')
  }
  
  return (
    <DashboardLayout>
      <FocusMode />
    </DashboardLayout>
  )
}
