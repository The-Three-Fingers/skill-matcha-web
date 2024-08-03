import { getTranslations } from 'next-intl/server';

import { AddRegistrationForm } from '@/components/AddRegistrationForm';

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
  return <AddRegistrationForm />;
};

export const dynamic = 'force-dynamic';

export default CreateProfile;
