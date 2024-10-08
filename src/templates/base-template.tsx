'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAuth } from '@/auth/AuthContext';
import { LogInButton } from '@/components/login-button';
import { SignUpButton } from '@/components/sign-up-button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/libs/utils';
import { AppConfig } from '@/utils/AppConfig';

import NavbarButtons from './navbar-buttons';

const BaseTemplate = ({
  children,
  isPublicPage,
}: {
  children: React.ReactNode;
  isPublicPage?: boolean;
}) => {
  const pathname = usePathname();
  const { user } = useAuth();
  const isAuthPage = pathname === '/login' || pathname === '/sign-up';

  // TODO: Add a loading spinner
  // TODO посмотреть нужно ли будет создать доп template, закомментила пока классы

  return (
    <div className="flex size-full flex-col antialiased">
      <header
        className={cn(
          'h-24 flex-none bg-background/15 border-b-[1px] dark:border-b-foreground/50',
          {
            'border-b bg-white dark:bg-background h-20': !isPublicPage,
          },
        )}
      >
        <div className="mx-auto flex h-full max-w-screen-lg items-center px-4">
          <Link href="/" className="mr-auto flex items-center gap-4">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={isPublicPage ? 60 : 40}
              height={isPublicPage ? 60 : 40}
            />
            <h1
              className={cn(
                'text-xl font-bold uppercase text-primary sm:text-3xl',
                {
                  'text-lg sm:text-lg': !isPublicPage,
                },
              )}
            >
              {AppConfig.name}
            </h1>
          </Link>

          <div className="flex items-center gap-8">
            {!isPublicPage && (
              <div className="flex items-center gap-2">
                {user ? (
                  <NavbarButtons />
                ) : (
                  !isAuthPage && (
                    <>
                      <LogInButton />
                      <SignUpButton />
                    </>
                  )
                )}
              </div>
            )}
            <ThemeToggle
              className={cn({
                'hover:bg-primary/20 size-12': isPublicPage,
              })}
            />
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>
      <Toaster />
    </div>
  );
};

export { BaseTemplate };
