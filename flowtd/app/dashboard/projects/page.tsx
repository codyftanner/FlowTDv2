import { redirect } from 'next/navigation'
import { getServerSessionWithDev } from '@/lib/auth'
import DashboardLayout from '@/components/dashboard-layout'
import ProjectsList from '@/components/projects-list'

export default async function ProjectsPage() {
  const session = await getServerSessionWithDev()
  
  if (!session) {
    redirect('/')
  }
  
  return (
    <DashboardLayout>
      <div className="p-6">
        <ProjectsList />
      </div>
    </DashboardLayout>
  )
}
