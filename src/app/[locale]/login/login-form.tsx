'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { GoogleButton } from '@/components/google-button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useAuthHandlers } from '@/hooks/use-auth-handlers';
import { AppConfig } from '@/utils/AppConfig';

export function LoginForm() {
  const t = useTranslations('Auth');

  const { google } = useAuthHandlers();

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="text-center">
          {t('log_in_form_title', { appName: AppConfig.name })}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <GoogleButton
          isLoading={google.isLoading || google.hasLogged}
          onClick={google.onAuth}
        />
      </CardContent>
      <CardFooter className="justify-center">
        <p className="font-medium leading-7">
          {t('dont_have_account')}{' '}
          <Link href="/sign-up" className="text-primary hover:underline">
            {t('sign_up_link')}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
