import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { TypographyH2 } from '@/components/ui/typography';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <TypographyH2>Welcome!</TypographyH2>
    </div>
  );
}
