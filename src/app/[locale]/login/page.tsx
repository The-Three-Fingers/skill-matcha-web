import { getTranslations } from 'next-intl/server';

import { GoogleLoginButton } from '@/components/google-login-button';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'LogIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const LogInPage = async () => {
  return (
    <div className="mx-auto flex flex-col justify-center">
      <GoogleLoginButton />
    </div>
  );
};

export default LogInPage;
