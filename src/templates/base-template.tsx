import Link from 'next/link';

import LocaleSwitcher from '@/components/locale-switcher';
import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="size-full px-1 text-gray-700 antialiased">
      <header className="h-14 bg-white">
        <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold text-lime-600/70">
              {AppConfig.name}
            </h1>
          </Link>

          <div className="flex items-center gap-2">
            {props.rightNav}
            <LocaleSwitcher />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto flex max-w-screen-lg justify-between">
          {props.children}
        </div>
      </main>
    </div>
  );
};

export { BaseTemplate };
