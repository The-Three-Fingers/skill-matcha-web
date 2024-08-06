import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { NavigationBar } from '@/components/navigation-bar';
import { BaseTemplate } from '@/templates/base-template';

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('RootLayout');

  return (
    <BaseTemplate
      rightNav={
        <NavigationBar
          items={[{ label: t('sign_in_link'), href: '/sign-in' }]}
        />
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
