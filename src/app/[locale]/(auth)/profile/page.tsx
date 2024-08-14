import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { getTokens } from 'next-firebase-auth-edge/lib/next/tokens';

import { authConfig } from '@/config/server-config';

import { UserProfile } from './_components/user-profile';

export default async function Profile() {
  return (
    <div className="p-3">
      <UserProfile />
    </div>
  );
}

// Generate customized metadata based on user cookies
// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export async function generateMetadata(): Promise<Metadata> {
  const tokens = await getTokens(cookies(), authConfig);

  if (!tokens) {
    return {};
  }

  return {
    title: `${tokens.decodedToken.email} profile page`,
  };
}
