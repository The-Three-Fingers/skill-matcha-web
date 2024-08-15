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

export function SignUpForm() {
  const t = useTranslations('Auth');

  const { google } = useAuthHandlers();

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="text-center">{t('sign_up_form_title')}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <GoogleButton
          isLoading={google.isLoading || google.hasLogged}
          onClick={google.onAuth}
        />
      </CardContent>
      <CardFooter className="justify-center">
        <p className="font-medium leading-7">
          {t('already_have_account')}{' '}
          <Link href="/login" className="text-primary hover:underline">
            {t('log_in_link')}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
