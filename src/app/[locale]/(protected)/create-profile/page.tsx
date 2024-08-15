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

const CreateProfile = () => {
  return (
    <div className="mx-auto flex size-full max-w-screen-xl items-center justify-center p-4">
      <CreateProfileForm />
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default CreateProfile;
