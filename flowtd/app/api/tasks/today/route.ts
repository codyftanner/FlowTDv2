import { NextRequest, NextResponse } from 'next/server'
import { getServerSessionWithDev } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { startOfToday, endOfToday } from 'date-fns'

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSessionWithDev()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const searchParams = req.nextUrl.searchParams
    const contexts = searchParams.get('contexts')?.split(',') || []
    const energyLevel = searchParams.get('energyLevel')
    const timeBlock = searchParams.get('timeBlock')

    const todayStart = startOfToday()
    const todayEnd = endOfToday()

    const where: any = {
      userId: session.user.id,
      status: {
        in: ['PENDING', 'IN_PROGRESS'],
      },
      OR: [
        {
          dueDate: {
            gte: todayStart,
            lte: todayEnd,
          },
        },
        {
          plannedStart: {
            gte: todayStart,
            lte: todayEnd,
          },
        },
        // Also include tasks without dates (for suggested/quick wins)
        {
          dueDate: null,
          plannedStart: null,
        },
      ],
    }

    // Filter by contexts (tasks must have ALL specified contexts)
    if (contexts.length > 0) {
      where.AND = [
        ...(where.AND || []),
        ...contexts.map((ctx: string) => ({
          contexts: {
            contains: ctx,
          },
        })),
      ]
    }

    // Filter by energy level
    if (energyLevel) {
      where.AND = [
        ...(where.AND || []),
        { energyLevel },
      ]
    }

    // Filter by time block
    if (timeBlock) {
      where.AND = [
        ...(where.AND || []),
        { timeBlock },
      ]
    }

    const tasks = await prisma.task.findMany({
      where,
      include: {
        project: {
          select: {
            id: true,
            title: true,
          },
        },
      },
      orderBy: [
        { dueDate: 'asc' },
        { plannedStart: 'asc' },
        { createdAt: 'asc' },
      ],
      take: 50,
    })

    return NextResponse.json(tasks)
  } catch (error) {
    console.error('Failed to load today tasks:', error)
    return NextResponse.json({ error: 'Failed to load tasks' }, { status: 500 })
  }
}
