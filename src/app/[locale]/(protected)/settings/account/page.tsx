import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';
import { TypographyH3, TypographyP } from '@/components/ui/typography';

import { AccountForm } from './account-form';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Settings',
  });

  return {
    title: t('meta_title'),
  };
}

const t = useTranslations('account');

const SettingsAccountPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <TypographyH3>{t('metaTitle')}</TypographyH3>
        <TypographyP>{t('metaDescription')}</TypographyP>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default SettingsAccountPage;
