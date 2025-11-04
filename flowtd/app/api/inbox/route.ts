import { NextResponse } from 'next/server'
import { getServerSessionWithDev } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const session = await getServerSessionWithDev()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const inboxItems = await prisma.inboxItem.findMany({
      where: {
        userId: session.user.id,
        processedAt: null,
      },
      orderBy: {
        capturedAt: 'asc',
      },
    })

    return NextResponse.json(inboxItems)
  } catch (error) {
    console.error('Failed to load inbox items:', error)
    return NextResponse.json({ error: 'Failed to load inbox' }, { status: 500 })
  }
}

