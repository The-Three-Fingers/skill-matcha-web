import { getTranslations } from 'next-intl/server';

import { AddCreateProfileForm } from '@/components/AddCreateProfileForm';

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
  return <AddCreateProfileForm />;
};

export const dynamic = 'force-dynamic';

export default CreateProfile;
