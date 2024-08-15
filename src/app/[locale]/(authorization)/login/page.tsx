import { getTranslations } from 'next-intl/server';

import { LoginForm } from './login-form';

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

const LogInPage = () => (
  <div className="mx-auto flex size-full max-w-screen-xl flex-col items-center justify-center p-4">
    <LoginForm />
  </div>
);

export default LogInPage;
