import { getTranslations } from 'next-intl/server';

import CreateProfileForm from '@/components/create-profile-form';

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
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <CreateProfileForm />
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default CreateProfile;
