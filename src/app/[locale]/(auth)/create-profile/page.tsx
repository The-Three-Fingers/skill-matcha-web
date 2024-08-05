import { getTranslations } from 'next-intl/server';

import { CreateProfileForm } from '@/components/create-profile-form/CreateProfileForm';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'CreateProfile',
  });

  return {
    title: t('meta_title'),
  };
}

const CreateProfile = () => {
  return <CreateProfileForm />;
};

export const dynamic = 'force-dynamic';

export default CreateProfile;
