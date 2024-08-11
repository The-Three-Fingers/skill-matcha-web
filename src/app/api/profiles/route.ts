import { getFirestore } from 'firebase-admin/firestore';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { verifyIdToken } from '@/auth/verifyIdToken';

import { getFirebaseAdminApp } from '../../firebase';

export async function GET(_request: NextRequest) {
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

    const db = getFirestore(getFirebaseAdminApp());

    const query = await db.collection('profiles').doc(decodedToken.uid).get();

    const profile = await query.data();

    if (!query.exists) {
      return new NextResponse(
        JSON.stringify({
          error: 'No profile found',
        }),
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(profile);
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
    });
  }
}

export async function POST(request: NextRequest) {
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

    const db = getFirestore(getFirebaseAdminApp());

    const data = await request.json();
    const { name, lastName } = data;

    if (!name || !lastName) {
      return new NextResponse(
        JSON.stringify({
          error: 'Missing required fields',
        }),
        {
          status: 400,
        },
      );
    }

    const query = await db.collection('profiles').doc(decodedToken.uid).get();

    const profile = await query.data();

    if (!query.exists || !profile) {
      const newProfile = {
        id: decodedToken.uid,
        name,
        lastName,
      };

      await query.ref.create(newProfile);
      return NextResponse.json(newProfile);
    }

    const updatedProfile = {
      ...profile,
      name,
      lastName,
    };

    await query.ref.update(updatedProfile);

    return NextResponse.json(updatedProfile);
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
    });
  }
}

export async function DELETE(_request: NextRequest) {
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

    const db = getFirestore(getFirebaseAdminApp());

    const query = await db.collection('profiles').doc(decodedToken.uid).get();

    if (!query.exists) {
      return new NextResponse(
        JSON.stringify({
          error: 'No profile found',
        }),
        {
          status: 404,
        },
      );
    }

    await query.ref.delete();

    return new NextResponse(null, {
      status: 204,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
