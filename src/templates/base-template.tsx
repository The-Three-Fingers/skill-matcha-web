import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/locale-switcher';
import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto flex min-h-screen max-w-screen-md flex-col">
        <header>
          <div className="flex justify-between pb-8 pt-16">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {AppConfig.name}
              </h1>
              <h2 className="text-xl">{t('description')}</h2>
            </div>
            <LocaleSwitcher />
          </div>

          <div className="flex justify-between">
            {props.leftNav}

            {props.rightNav}
          </div>
        </header>

        <main className="flex-1">{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.name}.
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
