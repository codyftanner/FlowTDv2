import { NextResponse } from 'next/server'
import { getServerSessionWithDev } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const session = await getServerSessionWithDev()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const projects = await prisma.project.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        tasks: {
          where: {
            status: {
              in: ['PENDING', 'IN_PROGRESS'],
            },
          },
          take: 5,
        },
        nextActions: {
          where: {
            status: {
              in: ['PENDING', 'IN_PROGRESS'],
            },
          },
          take: 3,
        },
        goal: {
          select: {
            id: true,
            title: true,
          },
        },
      },
      orderBy: [
        { status: 'asc' },
        { updatedAt: 'desc' },
      ],
    })

    return NextResponse.json(projects)
  } catch (error) {
    console.error('Failed to load projects:', error)
    return NextResponse.json({ error: 'Failed to load projects' }, { status: 500 })
  }
}

