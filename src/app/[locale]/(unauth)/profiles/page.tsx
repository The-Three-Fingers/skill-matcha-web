import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

import { AddProfileForm } from '@/components/AddProfileForm';
import { ProfileList } from '@/components/ProfileList';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Profiles',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Guestbook = () => {
  const t = useTranslations('Profiles');

  return (
    <>
      <AddProfileForm />

      <Suspense fallback={<p>{t('loading_profiles')}</p>}>
        <ProfileList />
      </Suspense>
    </>
  );
};

export const dynamic = 'force-dynamic';

export default Guestbook;
