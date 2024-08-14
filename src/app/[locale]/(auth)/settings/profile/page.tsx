import { getTranslations } from 'next-intl/server';

import { ProfileForm } from './profile-form';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Settings',
  });

  return {
    title: t('meta_title'),
  };
}

const AccountPage = () => {
  return <ProfileForm />;
};

export const dynamic = 'force-dynamic';

export default AccountPage;
