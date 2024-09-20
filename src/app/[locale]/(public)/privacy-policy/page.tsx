import { getTranslations } from 'next-intl/server';

import { PrivacyPolicy } from './privacy-policy';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'privacyPolicy',
  });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

const PrivacyPolicyPage = () => (
  <div className="mx-auto flex size-full max-w-screen-xl flex-col items-center justify-center p-4 pb-16">
    <PrivacyPolicy />
  </div>
);

export default PrivacyPolicyPage;
