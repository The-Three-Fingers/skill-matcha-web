import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';
import { TypographyH3, TypographyP } from '@/components/ui/typography';

import { MatchPreferencesForm } from './match-preferences-form';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Settings',
  });

  return {
    title: t('meta_title'),
  };
}

const SettingsAccountPage = () => {
  const t = useTranslations('account');
  return (
    <div className="space-y-6">
      <div>
        <TypographyH3>{t('metaTitle')}</TypographyH3>
        <TypographyP>{t('metaDescription')}</TypographyP>
      </div>
      <Separator />
      <MatchPreferencesForm />
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default SettingsAccountPage;
