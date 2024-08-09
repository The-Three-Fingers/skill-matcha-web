'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAuth } from '@/auth/AuthContext';
import { LogInButton } from '@/components/login-button';
import { LogOutButton } from '@/components/logout-button';
import { AppConfig } from '@/utils/AppConfig';

const ProfileCardTemplate = (props: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const { user } = useAuth();

  const isLoginPage = pathname.includes('/login');

  const logInButton = isLoginPage ? null : <LogInButton />;

  return (
    <div className="flex size-full flex-col text-gray-700 antialiased">
      <header className="h-14 flex-none bg-white px-6">
        <div className="mx-auto flex h-full max-w-screen-xl items-center">
          <Link href="/" className="mr-auto">
            <h1 className="text-2xl font-bold text-lime-600/70">
              {AppConfig.name}
            </h1>
          </Link>

          {user ? <LogOutButton /> : logInButton}
        </div>
      </header>

      <main className="flex-1">{props.children}</main>
    </div>
  );
};

export { ProfileCardTemplate };
