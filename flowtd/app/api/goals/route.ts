import { NextResponse } from 'next/server'
import { getServerSessionWithDev } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const session = await getServerSessionWithDev()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const goals = await prisma.goal.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        projects: {
          where: {
            status: 'ACTIVE',
          },
          take: 5,
        },
      },
      orderBy: [
        { isCompleted: 'asc' },
        { horizon: 'asc' },
        { createdAt: 'desc' },
      ],
    })

    return NextResponse.json(goals)
  } catch (error) {
    console.error('Failed to load goals:', error)
    return NextResponse.json({ error: 'Failed to load goals' }, { status: 500 })
  }
}

