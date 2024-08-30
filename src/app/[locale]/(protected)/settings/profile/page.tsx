import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';
import { getPageTitleWithAppName } from '@/libs/utils';

import { ProfileForm } from './profile-form';
import { ProfileHeaderContent } from './profile-header-content';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'profile',
  });

  return {
    title: getPageTitleWithAppName(t('metaTitle')),
  };
}

const SettingsProfilePage = () => {
  return (
    <div className="space-y-6">
      <ProfileHeaderContent />
      <Separator />
      <ProfileForm />
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default SettingsProfilePage;
