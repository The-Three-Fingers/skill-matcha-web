'use client';

import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

import NavbarButtons from './navbar-buttons';

const ProfileCardTemplate = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex size-full flex-col text-gray-700 antialiased">
      <header className="h-14 flex-none bg-white px-6">
        <div className="mx-auto flex h-full max-w-screen-xl items-center">
          <Link href="/" className="mr-auto">
            <h1 className="text-2xl font-bold text-lime-600/70">
              {AppConfig.name}
            </h1>
          </Link>

          <NavbarButtons />
        </div>
      </header>

      <main className="flex-1">{props.children}</main>
    </div>
  );
};

export { ProfileCardTemplate };
