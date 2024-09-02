import { Filter } from 'firebase-admin/firestore';
import { type NextRequest, NextResponse } from 'next/server';
import type { z } from 'zod';

import { getFirebaseDB } from '@/app/firebase';
import { verifyIdToken } from '@/auth/verifyIdToken';
import type { ProfileValidation } from '@/validations/profile-validation';

type Profile = z.infer<typeof ProfileValidation>;

export async function GET(request: NextRequest) {
  const offsetParam = Number(request.nextUrl.searchParams.get('offset') ?? '0');

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

    const profile = (await query.data()) as Profile;

    if (profile.searchPreferences.length > 0) {
      const searchServices = profile.searchPreferences.flatMap(
        (searchPreference) => searchPreference.services,
      );

      const matchesDataByServices = await db
        .collection('profiles')
        .where('id', '!=', decodedToken.uid)
        .where('services', 'array-contains-any', searchServices)
        .limit(10)
        .offset(offsetParam)
        .orderBy('role')
        .get();

      const matches = matchesDataByServices.docs.map((doc) => {
        const { createdAt, updatedAt, ...restData } = doc.data();

        return {
          ...restData,
          createdAt: createdAt.toDate(),
          updatedAt: updatedAt.toDate(),
        };
      });

      return NextResponse.json(matches);
    }

    const profileServices = profile.services;

    const matchesDataByProfileServices = await db
      .collection('profiles')
      .where('id', '!=', decodedToken.uid)
      .where(
        Filter.or(
          Filter.where(
            'searchPreference1.services',
            'array-contains-any',
            profileServices,
          ),
          Filter.where(
            'searchPreference2.services',
            'array-contains-any',
            profileServices,
          ),
        ),
      )
      .limit(10)
      .offset(offsetParam)
      .orderBy('role')
      .get();

    const matches = matchesDataByProfileServices.docs.map((doc) => {
      const { createdAt, updatedAt, ...restData } = doc.data();

      return {
        ...restData,
        createdAt: createdAt.toDate(),
        updatedAt: updatedAt.toDate(),
      };
    });

    return NextResponse.json(matches);
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
