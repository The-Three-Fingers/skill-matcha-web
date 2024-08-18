import { redirect } from 'next/navigation';

import { Env } from '@/libs/Env';
import { BaseTemplate } from '@/templates/base-template';

export default async function Layout(props: { children: React.ReactNode }) {
  if (Env.NODE_ENV === 'development') {
    redirect('/');
  }

  return <BaseTemplate>{props.children}</BaseTemplate>;
}

export const dynamic = 'force-dynamic';
