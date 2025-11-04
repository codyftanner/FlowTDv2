import { NextRequest, NextResponse } from 'next/server'
import { getServerSessionWithDev } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSessionWithDev()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { title, notes } = await req.json()

    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 })
    }

    const inboxItem = await prisma.inboxItem.create({
      data: {
        userId: session.user.id,
        title,
        notes: notes || null,
        source: 'MANUAL',
      },
    })

    return NextResponse.json({ success: true, inboxItem })
  } catch (error) {
    console.error('Failed to capture inbox item:', error)
    return NextResponse.json({ error: 'Failed to capture item' }, { status: 500 })
  }
}

