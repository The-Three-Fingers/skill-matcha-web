import { getTranslations } from 'next-intl/server';

import { SignUpForm } from './signup-form';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'SignUp',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignUpPage = () => (
  <div className="mx-auto flex size-full max-w-screen-xl flex-col items-center justify-center p-4">
    <SignUpForm />
  </div>
);

export default SignUpPage;
