import { NextResponse } from 'next/server';

import { verifyIdToken } from '@/auth/verifyIdToken';

import { languages } from './constants';

export async function GET() {
  try {
    const decodedToken = await verifyIdToken();

    if (!decodedToken) {
      return new NextResponse(
        JSON.stringify({
          error: 'Unauthenticated',
        }),
        {
          status: 401,
        },
      );
    }

    return NextResponse.json(languages);
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
