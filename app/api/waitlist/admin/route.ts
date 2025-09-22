import { list } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Simple authentication check - you should replace this with proper auth
    const authHeader = request.headers.get('authorization');
    const adminPassword = process.env.WAITLIST_ADMIN_PASSWORD || 'admin123';
    
    if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // List all waitlist entries
    const { blobs } = await list({
      prefix: 'lymowaitlist/'
    });

    // Parse the waitlist entries
    const waitlistEntries = [];
    
    for (const blob of blobs) {
      try {
        const response = await fetch(blob.url);
        const data = await response.json();
        waitlistEntries.push({
          ...data,
          filename: blob.pathname,
          size: blob.size,
          uploadedAt: blob.uploadedAt
        });
      } catch (err) {
        console.error(`Failed to parse blob ${blob.pathname}:`, err);
      }
    }

    // Sort by timestamp (newest first)
    waitlistEntries.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return NextResponse.json({
      success: true,
      count: waitlistEntries.length,
      entries: waitlistEntries
    });

  } catch (error) {
    console.error('Admin waitlist retrieval error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve waitlist entries' },
      { status: 500 }
    );
  }
}
