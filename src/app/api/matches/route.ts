import { Filter } from 'firebase-admin/firestore';
import { type NextRequest, NextResponse } from 'next/server';
import type { z } from 'zod';

import { getFirebaseDB } from '@/app/firebase';
import { verifyIdToken } from '@/auth/verifyIdToken';
import type { ProfileValidation } from '@/validations/profile-validation';

type ClientProfile = z.infer<typeof ProfileValidation>;
type ServerProfile = Omit<ClientProfile, 'searchPreferences'> & {
  createdAt: FirebaseFirestore.Timestamp;
  updatedAt: FirebaseFirestore.Timestamp;
  searchPreference1?: ClientProfile['searchPreferences'][0];
  searchPreference2?: ClientProfile['searchPreferences'][1];
};

const prepareMatches = (matches: ServerProfile[]) => {
  return matches.map((match) => {
    const {
      createdAt,
      updatedAt,
      searchPreference1,
      searchPreference2,
      ...restData
    } = match;

    return {
      ...restData,
      searchPreferences: [searchPreference1, searchPreference2].filter(Boolean),
      createdAt: createdAt.toDate(),
      updatedAt: updatedAt.toDate(),
    };
  });
};

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

    const profile = (await query.data()) as ServerProfile;

    if (profile.searchPreference1 || profile.searchPreference2) {
      const searchServices = [
        ...(profile.searchPreference1?.services ?? []),
        ...(profile.searchPreference2?.services ?? []),
      ];

      const matchesDataBySearchServices = await db
        .collection('profiles')
        .where('id', '!=', decodedToken.uid)
        .where('services', 'array-contains-any', searchServices)
        .limit(10)
        .offset(offsetParam)
        .orderBy('role')
        .get();

      const matches = prepareMatches(
        matchesDataBySearchServices.docs.map((doc) =>
          doc.data(),
        ) as ServerProfile[],
      );

      return NextResponse.json(matches);
    }

    // Case when no search preferences are set we look for matches who are looking for by the profile services
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

    const matches = prepareMatches(
      matchesDataByProfileServices.docs.map((doc) =>
        doc.data(),
      ) as ServerProfile[],
    );

    return NextResponse.json(matches);
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
