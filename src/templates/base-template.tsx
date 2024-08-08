'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAuth } from '@/auth/AuthContext';
import { LogInButton } from '@/components/login-button';
import { LogOutButton } from '@/components/logout-button';
import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const { user } = useAuth();

  const isLoginPage = pathname.includes('/login');

  const logInButton = isLoginPage ? null : <LogInButton />;

  return (
    <div className="flex size-full flex-col antialiased">
      <header className="h-14 flex-none bg-white px-4">
        <div className="mx-auto flex h-full max-w-screen-xl items-center">
          <Link href="/" className="mr-auto">
            <h1 className="text-xl font-bold uppercase text-foreground">
              {AppConfig.name}
            </h1>
          </Link>

          {user ? <LogOutButton /> : logInButton}
        </div>
      </header>

      <main className="flex-1 p-3">
        <div className="mx-auto flex h-full max-w-screen-lg justify-between">
          {props.children}
        </div>
      </main>
    </div>
  );
};

export { BaseTemplate };
