import { getTranslations } from 'next-intl/server';

import { TermsOfUse } from './terms-of-use';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'termsOfUse',
  });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

const TermsOfUsePage = () => (
  <div className="mx-auto flex size-full max-w-screen-xl flex-col items-center justify-center p-4">
    <TermsOfUse />
  </div>
);

export default TermsOfUsePage;
