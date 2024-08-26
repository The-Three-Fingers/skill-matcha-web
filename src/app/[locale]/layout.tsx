import '@/styles/global.css';

import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { cookies, headers } from 'next/headers';
import { getTokens } from 'next-firebase-auth-edge';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import { AuthProvider } from '@/auth/AuthProvider';
import { authConfig } from '@/config/server-config';
import { cn } from '@/libs/utils';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { toUser } from '@/shared/user';
import { AppConfig } from '@/utils/AppConfig';

const fontSans = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://skillmatcha.app'),
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export function generateStaticParams() {
  return AppConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  // Using internationalization in Client Components
  const messages = await getMessages();

  const tokens = await getTokens(cookies(), {
    ...authConfig,
    headers: headers(),
  });
  const user = tokens ? toUser(tokens) : null;

  return (
    <html lang={props.params.locale}>
      <GoogleTagManager gtmId="GTM-MWX2L65H" />
      <body
        className={cn(
          'h-screen font-sans antialiased selection:bg-primary selection:text-primary-foreground',
          fontSans.variable,
        )}
      >
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWX2L65H"
            height={0}
            width={0}
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider
            locale={props.params.locale}
            messages={messages}
          >
            <AuthProvider user={user}>
              <ReactQueryProvider>{props.children}</ReactQueryProvider>
            </AuthProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
        <div id="dialog-portal" />
      </body>
    </html>
  );
}
