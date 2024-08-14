import { getTranslations } from 'next-intl/server';

import { useTranslations } from 'next-intl';
import React from 'react';
import { SidebarNav } from './components/sidebar-nav';
import { TypographyH3 } from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';

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
      title: t('profile_settings'),
      href: '/settings/profile',
    },
    {
      title: t('account_settings'),
      href: '/settings/account',
    },
  ];

  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="space-y-0.5">
      <TypographyH3 className="text-2xl font-bold tracking-tight">{t('page_title')}</TypographyH3>
        <p className="text-muted-foreground">{t('page_description')}</p>
      </div>
      
      <Separator className="my-6" />

      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5 w-full shrink-0">
          <SidebarNav items={sidebarNavItems} />
        </aside>

        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default Settings;
