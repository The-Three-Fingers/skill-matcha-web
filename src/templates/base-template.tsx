'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAuth } from '@/auth/AuthContext';
import { LogInButton } from '@/components/login-button';
import { SignUpButton } from '@/components/sign-up-button';
import { AppConfig } from '@/utils/AppConfig';

import NavbarButtons from './navbar-buttons';

const BaseTemplate = (props: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { user } = useAuth();
  const isAuthPage = pathname === '/login' || pathname === '/sign-up';

  // TODO: Add a loading spinner
  // TODO посмотреть нужно ли будет создать доп template, закомментила пока классы

  return (
    <div className="flex size-full flex-col antialiased">
      <header className="h-14 flex-none border-b bg-white">
        <div className="mx-auto flex h-full max-w-screen-xl items-center px-4">
          <Link href="/" className="mr-auto">
            <h1 className="text-xl font-bold uppercase text-primary">
              {AppConfig.name}
            </h1>
          </Link>

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
        </div>
      </header>

      {/* <main className="flex-1 p-3">
        <div className="mx-auto flex h-full max-w-screen-lg">
          {props.children}
        </div>
      </main> */}

      <main className="flex-1">{props.children}</main>
    </div>
  );
};

export { BaseTemplate };
