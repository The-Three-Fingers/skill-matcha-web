import { useTranslations } from 'next-intl';

import { LogOutButton } from '@/components/LogOutButton';
import { NavigationBar } from '@/components/NavigationBar';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  const t = useTranslations('DashboardLayout');

  return (
    <BaseTemplate
      leftNav={
        <NavigationBar
          items={[
            { label: t('dashboard_link'), href: '/dashboard/' },
            { label: t('user_profile_link'), href: '/dashboard/user-profile/' },
          ]}
        />
      }
      rightNav={<LogOutButton />}
    >
      {props.children}
    </BaseTemplate>
  );
}

export const dynamic = 'force-dynamic';
