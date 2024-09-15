import { getTranslations } from 'next-intl/server';

import { getPageTitleWithAppName } from '@/libs/utils';

import { Matches } from './matches';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'matches',
  });

  return {
    title: getPageTitleWithAppName(t('meta_title')),
  };
}

const MatchesPage = () => {
  return <Matches />;
};

export default MatchesPage;
