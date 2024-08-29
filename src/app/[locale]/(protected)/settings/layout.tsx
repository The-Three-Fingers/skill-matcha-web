import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import React from 'react';

import { Separator } from '@/components/ui/separator';
import { TypographyH3, TypographyP } from '@/components/ui/typography';

import { SidebarNav } from './components/sidebar-nav';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Settings',
  });

  return {
    title: t('meta_title'),
  };
}

interface SettingsProps {
  children: React.ReactNode;
}

const Settings = ({ children }: SettingsProps) => {
  const t = useTranslations('Settings');

  const sidebarNavItems = [
    {
      title: t('profileSettings'),
      href: '/settings/profile',
    },
    {
      title: t('preferencesSettings'),
      href: '/settings/match-preferences',
    },
  ];

  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="space-y-0.5">
        <TypographyH3>{t('page_title')}</TypographyH3>
        <TypographyP>{t('page_description')}</TypographyP>
      </div>

      <Separator className="my-6" />

      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 w-full shrink-0 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>

        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default Settings;
