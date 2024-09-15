import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getTokens } from 'next-firebase-auth-edge';

import { getFirebaseDB } from '@/app/firebase';
import { authConfig } from '@/config/server-config';
import { Env } from '@/libs/Env';
import { ProfileProvider } from '@/providers/ProfileProvider';
import { BaseTemplate } from '@/templates/base-template';
import type { Profile } from '@/providers/ProfileContext';

const CREATE_PROFILE_PATH = '/create-profile';
const DASHBOARD_PATH = '/dashboard';

const getProfileData = async (profileId: string | undefined) => {
  if (!profileId) return null;

  const db = getFirebaseDB();

  const query = await db.collection('profiles').doc(profileId).get();

  if (!query.exists) {
    return null;
  }

  const data = await query.data();

  if (!data) {
    return null;
  }

  const { createdAt, updatedAt, searchPreference1,  searchPreference2, ...restData } = data;

  const searchPreferences = [searchPreference1, searchPreference2].filter(Boolean);

  return {
    ...restData,
    searchPreferences,
    createdAt: createdAt.toDate(),
    updatedAt: updatedAt.toDate(),
  } as Profile;
};

export default async function Layout(props: { children: React.ReactNode }) {
  if (Env.NODE_ENV !== 'development') {
    redirect('/');
  }

  const currentPathname = headers().get('x-current-pathname');

  const tokens = await getTokens(cookies(), {
    ...authConfig,
    headers: headers(),
  });

  const profile = await getProfileData(tokens?.decodedToken.uid);

  if (!profile) {
    if (!currentPathname?.includes(CREATE_PROFILE_PATH)) {
      redirect(CREATE_PROFILE_PATH);
    }
  }

  if (profile && currentPathname?.includes(CREATE_PROFILE_PATH)) {
    redirect(DASHBOARD_PATH);
  }

  return (
    <ProfileProvider profile={profile}>
      <BaseTemplate>{props.children}</BaseTemplate>
    </ProfileProvider>
  );
}

export const dynamic = 'force-dynamic';
