'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAuth } from '@/auth/AuthContext';
import { LogInButton } from '@/components/login-button';
import { LogOutButton } from '@/components/logout-button';
import { SignUpButton } from '@/components/sign-up-button';
import { AppConfig } from '@/utils/AppConfig';

import NavbarButtons from './navbar-buttons';

const BaseTemplate = (props: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const { user } = useAuth();

  const isAuthPage = pathname === '/login' || pathname === '/sign-up';

  return (
    <div className="flex size-full flex-col antialiased">
      <header className="h-14 flex-none border-b bg-white px-4">
        <div className="mx-auto flex h-full max-w-screen-xl items-center">
          <Link href="/" className="mr-auto">
            <h1 className="text-xl font-bold uppercase text-primary">
              {AppConfig.name}
            </h1>
          </Link>

          <div className="flex items-center gap-2">
            <NavbarButtons />
            {user ? (
              <LogOutButton />
            ) : (
              !isAuthPage && (
                <>
                  <LogInButton />
                  <SignUpButton />
                </>
              )
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 p-3">
        <div className="mx-auto flex h-full max-w-screen-lg">
          {props.children}
        </div>
      </main>
    </div>
  );
};

export { BaseTemplate };
