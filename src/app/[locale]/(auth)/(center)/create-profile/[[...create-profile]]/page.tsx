import { getTranslations } from 'next-intl/server';

import { AddProfileForm } from '@/components/AddProfileForm';

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
  return <AddProfileForm />;
};

export const dynamic = 'force-dynamic';

export default CreateProfile;
