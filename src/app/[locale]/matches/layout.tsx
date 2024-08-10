import { ProfileCardTemplate } from '@/templates/profile-card-template';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'matchesProfiles',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function LoginLayout(props: {
  children: React.ReactNode;
}) {
  return <ProfileCardTemplate>{props.children}</ProfileCardTemplate>;
}

export const dynamic = 'force-dynamic';
