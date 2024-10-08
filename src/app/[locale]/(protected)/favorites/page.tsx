import { getTranslations } from 'next-intl/server';

import { Favorites } from './favorites';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'favorites',
  });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

const FavoritesPage = () => (
  <div className="mx-auto flex size-full max-w-screen-xl items-center justify-center p-4">
    <Favorites />
  </div>
);

export default FavoritesPage;
