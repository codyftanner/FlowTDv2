import { redirect } from 'next/navigation'
import { getServerSessionWithDev } from '@/lib/auth'
import DashboardLayout from '@/components/dashboard-layout'
import WeeklyReviewWizard from '@/components/weekly-review-wizard'

export default async function ReviewPage() {
  const session = await getServerSessionWithDev()
  
  if (!session) {
    redirect('/')
  }
  
  return (
    <DashboardLayout>
      <div className="p-6">
        <WeeklyReviewWizard />
      </div>
    </DashboardLayout>
  )
}
