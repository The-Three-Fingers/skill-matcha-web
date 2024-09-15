import { FieldValue } from 'firebase-admin/firestore';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getFirebaseDB } from '@/app/firebase';
import { verifyIdToken } from '@/auth/verifyIdToken';
import {
  GeneralProfile,
  ProfileValidation,
  SearchPreferences,
} from '@/validations/profile-validation';

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

    const db = getFirebaseDB();

    const query = await db.collection('profiles').doc(decodedToken.uid).get();

    const profile = await query.data();

    if (!query.exists || !profile) {
      return new NextResponse(
        JSON.stringify({
          error: 'No profile found',
        }),
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

export async function POST(request: NextRequest) {
  try {
    const decodedToken = await verifyIdToken();

    if (!decodedToken) {
      return NextResponse.json(
        {
          error: 'Unauthenticated',
        },
        {
          status: 401,
        },
      );
    }

    const requestFormData = await request.formData();
    const requestData = Object.fromEntries(requestFormData.entries());

    const formattedData = Object.entries(requestData).reduce(
      (acc, [key, value]) => {
        if (typeof value === 'string' && value.startsWith('[')) {
          return {
            ...acc,
            [key]: JSON.parse(value),
          };
        }

        return {
          ...acc,
          [key]: value,
        };
      },
      {},
    );

    const parse = ProfileValidation.safeParse(formattedData);

    if (!parse.success) {
      return NextResponse.json(
        { error: parse.error.format() },
        { status: 422 },
      );
    }

    const db = getFirebaseDB();
    const query = await db.collection('profiles').doc(decodedToken.uid).get();
    const profile = await query.data();

    if (!query.exists || !profile) {
      const profileData = parse.data;

      const {
        avatarURL: avatarFile,
        searchPreferences,
        ...restData
      } = profileData;

      if (avatarFile) {
        // TODO: save the avatar URL to the profile

        // const storage = getFirebaseStorage();

        // const bytes = await avatarFile.arrayBuffer();
        // const buffer = Buffer.from(bytes);
        // const stream = Readable.from(buffer);

        // const destination = storage
        //   .bucket(Env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET)
        //   .file(`avatars/${avatarFile.name}`);

        // await new Promise((resolve, reject) => {
        //   stream
        //     .pipe(destination.createWriteStream())
        //     .on('error', (err) => {
        //       reject(err);
        //     })
        //     .on('finish', () => {
        //       resolve('uploaded');
        //     });
        // });

        // const url = await getDownloadURL(destination);

        delete parse.data.avatarURL;
      }

      const preparedSearchPreferences = searchPreferences.reduce(
        (acc, searchPreference, index) => {
          return {
            ...acc,
            [`searchPreference${index + 1}`]: searchPreference,
          };
        },
        {} as Record<string, (typeof searchPreferences)[number]>,
      );

      const newProfile = {
        id: decodedToken.uid,
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
        ...preparedSearchPreferences,
        ...restData,
      };

      await query.ref.create(newProfile);
      return NextResponse.json(newProfile, { status: 201 });
    }

    return NextResponse.json(
      { error: 'Profile already exists' },
      { status: 409 },
    );
  } catch (error) {
    return NextResponse.json(JSON.stringify({ error }), {
      status: 500,
    });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const decodedToken = await verifyIdToken();

    if (!decodedToken) {
      return NextResponse.json(
        {
          error: 'Unauthenticated',
        },
        {
          status: 401,
        },
      );
    }

    const requestFormData = await request.formData();
    const requestData = Object.fromEntries(requestFormData.entries());

    const formattedData = Object.entries(requestData).reduce(
      (acc, [key, value]) => {
        if (typeof value === 'string' && value.startsWith('[')) {
          return {
            ...acc,
            [key]: JSON.parse(value),
          };
        }

        return {
          ...acc,
          [key]: value,
        };
      },
      {},
    );

    const validationSchema =
      'searchPreferences' in formattedData ? SearchPreferences : GeneralProfile;
    const parse = validationSchema.safeParse(formattedData);

    if (!parse.success) {
      return NextResponse.json(
        { error: parse.error.format() },
        { status: 422 },
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

    const updatedData = parse.data;

    if ('searchPreferences' in updatedData) {
      const { searchPreferences } = updatedData;

      await query.ref.update({
        updatedAt: FieldValue.serverTimestamp(),
        searchPreference1: searchPreferences[0] ?? null,
        searchPreference2: searchPreferences[1] ?? null,
      });
    } else {
      if ('avatarURL' in updatedData) {
        const avatarFile = updatedData.avatarURL;

        if (avatarFile) {
          // TODO: save the avatar URL to the profile
          delete updatedData.avatarURL;
        }
      }

      await query.ref.update({
        updatedAt: FieldValue.serverTimestamp(),
        ...updatedData,
      });
    }

    return NextResponse.json('success');
  } catch (error) {
    return NextResponse.json(JSON.stringify({ error }), {
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

    const db = getFirebaseDB();

    const query = await db.collection('profiles').doc(decodedToken.uid).get();

    if (!query.exists) {
      return NextResponse.json(
        {
          error: 'No profile found',
        },
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
    return NextResponse.json(
      { error },
      {
        status: 500,
      },
    );
  }
}
