import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';

import { BaseTemplate } from '@/templates/base-template';
import { AppConfig } from '@/utils/AppConfig';

export const metadata: Metadata = {
  openGraph: {
    images: '',
    title: AppConfig.name,
    description: '',
  },
};

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  return <BaseTemplate isPublicPage>{props.children}</BaseTemplate>;
}
