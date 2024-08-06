import '@/styles/global.css';

import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import { getAuthenticatedAppForUser } from '@/libs/firebase/serverApp';
import { cn } from '@/libs/utils';
import { AppConfig } from '@/utils/AppConfig';

const fontSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
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
  const { currentUser } = await getAuthenticatedAppForUser();

  console.log(currentUser?.toJSON());
  unstable_setRequestLocale(props.params.locale);

  // Using internationalization in Client Components
  const messages = await getMessages();

  return (
    <html lang={props.params.locale}>
      <body
        className={cn(
          'h-screen bg-slate-100 font-sans antialiased',
          fontSans.variable,
        )}
      >
        <NextIntlClientProvider
          locale={props.params.locale}
          messages={messages}
        >
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
