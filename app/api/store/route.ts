import { NextResponse } from 'next/server';
import { WaitlistFormData, WaitlistResponse } from '../../components/types';

const API_URL = 'https://homebiro.onrender.com/store';

export async function POST(request: Request) {
  try {
    const body = await request.json() as WaitlistFormData;
    
    const formattedData = {
      fullname: body.fullname.trim(),
      email: body.email.trim().toLowerCase()
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formattedData),
    });

    const responseText = await response.text();
    let responseData: WaitlistResponse;

    try {
      responseData = JSON.parse(responseText);
    } catch (e) {
      throw new Error('Invalid response from server');
    }

    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to join waitlist');
    }

    return NextResponse.json(responseData);

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to submit to waitlist' },
      { status: 500 }
    );
  }
}