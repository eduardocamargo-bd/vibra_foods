import { NextRequest, NextResponse } from 'next/server'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { seed } from '@/endpoints/seed'

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })
    const req = { headers: request.headers } as any
    await seed({ payload, req })
    return NextResponse.json({ message: 'Database seeded successfully' })
  } catch (error) {
    console.error('Seeding error:', error)
    return NextResponse.json({ error: 'Failed to seed database' }, { status: 500 })
  }
}