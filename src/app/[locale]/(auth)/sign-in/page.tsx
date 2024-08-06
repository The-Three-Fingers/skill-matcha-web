import { getTranslations } from 'next-intl/server';

import { GoogleLoginButton } from '@/components/google-login-button';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignInPage = async () => {
  return <GoogleLoginButton />;
};

export default SignInPage;
