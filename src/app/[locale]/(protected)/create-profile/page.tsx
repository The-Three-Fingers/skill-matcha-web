import { getTranslations } from 'next-intl/server';

import { getPageTitleWithAppName } from '@/libs/utils';

import { CreateProfileForm } from './create-profile-form';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'CreateProfile',
  });

  return {
    title: getPageTitleWithAppName(t('meta_title')),
  };
}

const CreateProfilePage = () => {
  return <CreateProfileForm />;
};

export const dynamic = 'force-dynamic';

export default CreateProfilePage;
