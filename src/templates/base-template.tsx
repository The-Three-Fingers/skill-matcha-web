'use client';

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
        className={cn('h-20 flex-none bg-primary/15', {
          'border-b bg-white dark:bg-background h-14': !isPublicPage,
        })}
      >
        <div className="mx-auto flex h-full max-w-screen-lg items-center px-4">
          <Link href="/" className="mr-auto">
            <h1
              className={cn('font-bold uppercase text-primary text-3xl', {
                'text-xl': !isPublicPage,
              })}
            >
              {AppConfig.name}
            </h1>
          </Link>

          <div className="flex items-center gap-4">
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

      {/* <main className="flex-1 p-3">
        <div className="mx-auto flex h-full max-w-screen-lg">
          {props.children}
        </div>
      </main> */}

      <main className="flex-1">{children}</main>
      <Toaster />
    </div>
  );
};

export { BaseTemplate };
