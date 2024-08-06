// import { redirect } from 'next/navigation';

import { redirect } from 'next/navigation';

import { LogOutButton } from '@/components/LogOutButton';
import { getAuthenticatedAppForUser } from '@/libs/firebase/serverApp';
// import { getAuthenticatedAppForUser } from '@/libs/firebase/serverApp';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default async function AuthLayout(props: { children: React.ReactNode }) {
  const { currentUser } = await getAuthenticatedAppForUser();

  if (!currentUser) {
    redirect('/sign-in');
  }

  return (
    <BaseTemplate rightNav={<LogOutButton />}>{props.children}</BaseTemplate>
  );
}

export const dynamic = 'force-dynamic';
