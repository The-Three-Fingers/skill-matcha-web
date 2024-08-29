import { FieldValue, getFirestore } from 'firebase-admin/firestore';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { verifyIdToken } from '@/auth/verifyIdToken';
import { ProfileValidation } from '@/validations/profile-validation';

import { getFirebaseAdminApp } from '../../firebase';

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

    const profile = await query.data();

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

    const requestData = await request.json();
    const parse = ProfileValidation.safeParse(requestData);

    if (!parse.success) {
      return NextResponse.json(parse.error.format(), { status: 422 });
    }

    const query = await db.collection('profiles').doc(decodedToken.uid).get();

    const profile = await query.data();

    if (!query.exists || !profile) {
      const newProfile = {
        id: decodedToken.uid,
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
        ...parse.data,
      };

      await query.ref.create(newProfile);
      return NextResponse.json(newProfile);
    }

    const updatedProfile = {
      ...profile,
      updatedAt: FieldValue.serverTimestamp(),
      ...parse.data,
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
