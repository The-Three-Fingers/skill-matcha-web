import { getTranslations } from 'next-intl/server';

import {
  TypographyH1,
  TypographyH2,
  TypographyH4,
} from '@/components/ui/typography';

import { CollectEmailButton } from './collect-email-button';

export default async function HeroSection() {
  const t = await getTranslations('landing');

  return (
    <section className="flex w-full flex-col items-start justify-start gap-10 md:gap-12 lg:gap-16">
      <div>
        <TypographyH2 className="mb-0 border-none text-xl leading-8 sm:text-3xl xl:text-4xl">
          {t('heroSubtitle')}
        </TypographyH2>
        <TypographyH1 className="border-none leading-10 sm:text-5xl xl:text-6xl">
          {t('heroTitle1')} <br />
          {t('heroTitle2')}
          <br />
          {t('heroTitle3')}
        </TypographyH1>
      </div>

      <div className="flex flex-col gap-2 sm:gap-3 md:gap-5">
        <TypographyH4 className="w-8/12 xl:text-2xl 2xl:text-3xl">
          {t('heroDescription1')}
        </TypographyH4>
        <TypographyH4 className="w-8/12 xl:text-2xl 2xl:text-3xl">
          {t('heroDescription2')}
        </TypographyH4>
      </div>
      <CollectEmailButton
        size="lg"
        className="2xl:h-18 w-1/2 sm:w-1/3 lg:h-14 lg:text-xl xl:text-2xl 2xl:w-1/2 2xl:text-3xl"
      >
        {t('heroButton')}
      </CollectEmailButton>
    </section>
  );
}
