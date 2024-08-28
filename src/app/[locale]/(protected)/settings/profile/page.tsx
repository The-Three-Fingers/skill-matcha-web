import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';

import { Profile } from './profile';
import { ProfileHeaderContent } from './profile-header-content';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'profile',
  });

  return {
    title: t('metaTitle'),
  };
}

const SettingsProfilePage = () => {
  return (
    <div className="space-y-6">
      <ProfileHeaderContent />
      <Separator />
      <Profile />
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default SettingsProfilePage;
