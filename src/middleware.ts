import { type NextRequest, NextResponse } from 'next/server';
import {
  authMiddleware,
  redirectToHome,
  redirectToLogin as _redirectToLogin,
} from 'next-firebase-auth-edge';
import createMiddleware from 'next-intl/middleware';

import { authConfig } from './config/server-config';
import { AppConfig } from './utils/AppConfig';

const AUTH_PATHS = ['/login', '/sign-up'];
const PUBLIC_PATHS = ['/', '/terms-of-use', '/privacy-policy'];
const LOCALE_LIST = AppConfig.locales;
const LOCALE_REGEXP = /^\/([a-z]{2})(\/.+)?$/;
const LOCALE_SET = new Set(LOCALE_LIST);

export function extractLocale(pathname: string): string | null {
  const match = pathname.match(LOCALE_REGEXP);

  if (!match) {
    return null;
  }

  const locale = match[1];

  if (!locale || !LOCALE_SET.has(locale)) {
    return null;
  }

  return locale as string;
}

export function removeLocale(pathname: string, locale: string | null) {
  if (!locale) {
    return pathname;
  }

  if (pathname === `/${locale}`) {
    return '/';
  }

  return pathname.replace(`/${locale}/`, '/');
}

export function withoutLocale(pathname: string): string {
  const locale = extractLocale(pathname);

  return removeLocale(pathname, locale);
}

const intlMiddleware = createMiddleware({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

function redirectToLogin(request: NextRequest) {
  const url = request.nextUrl.clone();

  url.pathname = `/login`;
  url.searchParams.set('redirect', request.nextUrl.pathname);

  return NextResponse.redirect(url);
}

export async function middleware(request: NextRequest) {
  request.headers.set('x-current-pathname', request.nextUrl.pathname);

  return authMiddleware(request, {
    loginPath: '/api/login',
    logoutPath: '/api/logout',
    refreshTokenPath: '/api/refresh-token',
    enableMultipleCookies: authConfig.enableMultipleCookies,
    apiKey: authConfig.apiKey,
    cookieName: authConfig.cookieName,
    cookieSerializeOptions: authConfig.cookieSerializeOptions,
    cookieSignatureKeys: authConfig.cookieSignatureKeys,
    serviceAccount: authConfig.serviceAccount,
    handleValidToken: async ({ decodedToken }) => {
      // Authenticated user should not be able to access AUTH_PATHS routes
      if (AUTH_PATHS.includes(request.nextUrl.pathname)) {
        return redirectToHome(request);
      }

      if (!decodedToken.email_verified) {
        return redirectToLogin(request);
      }

      return intlMiddleware(request);
    },
    handleInvalidToken: async (_reason) => {
      if (
        PUBLIC_PATHS.includes(request.nextUrl.pathname) ||
        AUTH_PATHS.includes(request.nextUrl.pathname)
      ) {
        return intlMiddleware(request);
      }

      return redirectToLogin(request);
    },
    handleError: async (error) => {
      console.error('Unhandled authentication error', { error });

      if (
        PUBLIC_PATHS.includes(request.nextUrl.pathname) ||
        AUTH_PATHS.includes(request.nextUrl.pathname)
      ) {
        return intlMiddleware(request);
      }

      return _redirectToLogin(request);
    },
  });
}

export const config = {
  matcher: [
    '/((?!_next|favicon.ico|__/auth|__/firebase|api|.*\\.).*)',
    '/api/login',
    '/api/logout',
    '/api/refresh-token',
  ],
};
