import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getFirebaseDB } from '@/app/firebase';
import { verifyIdToken } from '@/auth/verifyIdToken';

export async function GET(
  _: NextRequest,
  { params }: { params: { matchId: string } },
) {
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

    const db = getFirebaseDB();

    const query = await db.collection('profiles').doc(params.matchId).get();

    const profile = await query.data();

    if (!query.exists || !profile) {
      return NextResponse.json(
        {
          error: 'No profile found',
        },
        {
          status: 404,
        },
      );
    }

    const { searchPreference1, searchPreference2, ...rest } = profile;

    return NextResponse.json({
      ...rest,
      searchPreferences: [searchPreference1, searchPreference2].filter(Boolean),
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
