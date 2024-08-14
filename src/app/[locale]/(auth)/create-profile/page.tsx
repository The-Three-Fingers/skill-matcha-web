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
    <div className="mx-auto flex h-full max-w-screen-lg">
      <div className="flex size-full items-center justify-center">
        <CreateProfileForm />
      </div>
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default CreateProfile;
