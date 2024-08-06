import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex size-full flex-col text-gray-700 antialiased">
      <header className="h-14 bg-white px-2">
        <div className="mx-auto flex h-full max-w-screen-xl items-center">
          <Link href="/" className="mr-auto">
            <h1 className="text-2xl font-bold text-lime-600/70">
              {AppConfig.name}
            </h1>
          </Link>

          {props.rightNav}
        </div>
      </header>

      <main className="flex-1 px-2">
        <div className="mx-auto flex h-full max-w-screen-lg justify-between">
          {props.children}
        </div>
      </main>
    </div>
  );
};

export { BaseTemplate };
