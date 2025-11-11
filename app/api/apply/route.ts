import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, track, message } = body;
    
    if (!name || !email || !track || !message) {
      return NextResponse.json(
        { error: 'Missing required fields. Please provide name, email, track, and message.' },
        { status: 400 }
      );
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }
    
    // Log the application (placeholder for actual persistence)
    console.log('New application received:', {
      name,
      email,
      track,
      message,
      timestamp: new Date().toISOString()
    });
    
    // Return success response
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Failed to process application. Please try again.' },
      { status: 500 }
    );
  }
}
