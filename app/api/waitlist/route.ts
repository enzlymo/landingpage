import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create a unique filename with timestamp
    const timestamp = new Date().toISOString();
    const filename = `lymowaitlist/signup-${Date.now()}-${Math.random().toString(36).substr(2, 9)}.json`;
    
    // Prepare the waitlist entry data
    const waitlistEntry = {
      email,
      timestamp,
      userAgent: request.headers.get('user-agent') || '',
      ip: request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    };

    // Store in Vercel Blob
    const blob = await put(filename, JSON.stringify(waitlistEntry), {
      access: 'private',
      contentType: 'application/json'
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist!',
      url: blob.url
    });

  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { error: 'Failed to add to waitlist. Please try again.' },
      { status: 500 }
    );
  }
}
