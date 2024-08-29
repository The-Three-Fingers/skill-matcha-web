import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getTokens } from 'next-firebase-auth-edge';

import { getFirebaseDB } from '@/app/firebase';
import { authConfig } from '@/config/server-config';
import { Env } from '@/libs/Env';
import { ProfileProvider } from '@/providers/ProfileProvider';
import { BaseTemplate } from '@/templates/base-template';

const CREATE_PROFILE_PATH = '/create-profile';
const DASHBOARD_PATH = '/dashboard';

export default async function Layout(props: { children: React.ReactNode }) {
  if (Env.NODE_ENV !== 'development') {
    redirect('/');
  }

  let profile = null;

  const currentPathname = headers().get('x-current-pathname');

  const tokens = await getTokens(cookies(), {
    ...authConfig,
    headers: headers(),
  });

  if (tokens) {
    const db = getFirebaseDB();

    const query = await db
      .collection('profiles')
      .doc(tokens.decodedToken.uid)
      .get();

    if (!query.exists) {
      if (!currentPathname?.includes(CREATE_PROFILE_PATH)) {
        redirect(CREATE_PROFILE_PATH);
      }
    }

    if (query.exists && currentPathname?.includes(CREATE_PROFILE_PATH)) {
      redirect(DASHBOARD_PATH);
    }

    const data = await query.data();

    if (data) {
      // eslint-disable-next-line unused-imports/no-unused-vars
      const { createdAt, updatedAt, ...restData } = data;

      profile = {
        ...restData,
        createdAt: createdAt.toDate(),
        updatedAt: updatedAt.toDate(),
      };
    }
  }

  return (
    <ProfileProvider profile={profile}>
      <BaseTemplate>{props.children}</BaseTemplate>
    </ProfileProvider>
  );
}

export const dynamic = 'force-dynamic';
