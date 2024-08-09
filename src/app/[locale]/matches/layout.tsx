// import { getTranslations } from 'next-intl/server';

import { ProfileCardTemplate } from '@/templates/profile-card-template';

// !! todo разобраться какую мету нужно на страницу вывода профайлов

// export async function generateMetadata(props: { params: { locale: string } }) {
//   const t = await getTranslations({
//     locale: props.params.locale,
//     namespace: 'LogIn',
//   });

//   return {
//     title: t('meta_title'),
//     description: t('meta_description'),
//   };
// }

export default async function LoginLayout(props: {
  children: React.ReactNode;
}) {
  return <ProfileCardTemplate>{props.children}</ProfileCardTemplate>;
}

// export const dynamic = 'force-dynamic';