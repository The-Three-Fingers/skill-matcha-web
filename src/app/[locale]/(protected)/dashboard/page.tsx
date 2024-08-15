import { getTranslations } from 'next-intl/server';

import { HelloMessage } from '@/components/hello-message';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('meta_title'),
  };
}

const Dashboard = () => (
  <div className="mx-auto flex size-full max-w-screen-xl items-center justify-center p-4">
    <HelloMessage />
  </div>
);

export default Dashboard;
