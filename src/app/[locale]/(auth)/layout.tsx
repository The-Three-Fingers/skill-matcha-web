import { enUS, ruRU } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';

export default function AuthLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let clerkLocale = enUS;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';
  let dashboardUrl = '/dashboard';

  if (props.params.locale === 'ru') {
    clerkLocale = ruRU;
  }

  if (props.params.locale !== 'en') {
    signInUrl = `/${props.params.locale}${signInUrl}`;
    signUpUrl = `/${props.params.locale}${signUpUrl}`;
    dashboardUrl = `/${props.params.locale}${dashboardUrl}`;
  }

  return (
    <ClerkProvider
      localization={clerkLocale}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      signInFallbackRedirectUrl={dashboardUrl}
      signUpFallbackRedirectUrl={dashboardUrl}
    >
      {props.children}
    </ClerkProvider>
  );
}
