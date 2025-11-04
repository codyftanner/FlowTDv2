import { NextRequest, NextResponse } from 'next/server'
import { getServerSessionWithDev } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSessionWithDev()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { inboxItemId, action } = await req.json()

    if (!inboxItemId || !action) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const inboxItem = await prisma.inboxItem.findFirst({
      where: {
        id: inboxItemId,
        userId: session.user.id,
        processedAt: null,
      },
    })

    if (!inboxItem) {
      return NextResponse.json({ error: 'Inbox item not found' }, { status: 404 })
    }

    // Mark as processed
    await prisma.inboxItem.update({
      where: { id: inboxItemId },
      data: { processedAt: new Date() },
    })

    // Handle different actions
    switch (action) {
      case 'do':
        // For MVP, just delete/mark complete
        // In full implementation, could create a task and complete it
        break

      case 'next':
        // Create a Next Action task
        await prisma.task.create({
          data: {
            userId: session.user.id,
            title: inboxItem.title,
            notes: inboxItem.notes || null,
            status: 'PENDING',
            isNextAction: true,
          },
        })
        break

      case 'later':
        // Create a deferred task
        await prisma.task.create({
          data: {
            userId: session.user.id,
            title: inboxItem.title,
            notes: inboxItem.notes || null,
            status: 'DEFERRED',
          },
        })
        break

      case 'waiting':
        // Create a waiting task
        await prisma.task.create({
          data: {
            userId: session.user.id,
            title: inboxItem.title,
            notes: inboxItem.notes || null,
            status: 'PENDING',
            isWaiting: true,
          },
        })
        break

      case 'project':
        // Create a project
        await prisma.project.create({
          data: {
            userId: session.user.id,
            title: inboxItem.title,
            desiredOutcome: inboxItem.notes || `Complete ${inboxItem.title}`,
            status: 'ACTIVE',
          },
        })
        break

      case 'delete':
        // Already marked as processed, just return
        break

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to process inbox item:', error)
    return NextResponse.json({ error: 'Failed to process item' }, { status: 500 })
  }
}

