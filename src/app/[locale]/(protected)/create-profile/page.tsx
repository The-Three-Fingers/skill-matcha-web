import { getTranslations } from 'next-intl/server';

import { CreateProfileForm } from './create-profile-form';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'CreateProfile',
  });

  return {
    title: t('meta_title'),
  };
}

const CreateProfilePage = () => {
  return <CreateProfileForm />;
};

export const dynamic = 'force-dynamic';

export default CreateProfilePage;
