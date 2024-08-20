import { useTranslations } from 'next-intl';

import { TypographyH2, TypographyH4 } from '@/components/ui/typography';

import { CollectEmailButton } from './collect-email-button';

export default function HeroSection() {
  const t = useTranslations('landing');

  return (
    <section className="flex w-full flex-col items-start justify-start gap-10 md:gap-16">
      <TypographyH2 className="border-none leading-10 sm:text-5xl xl:text-6xl">
        {t('heroTitle1')} <br />
        {t('heroTitle2')}
        <br />
        {t('heroTitle3')}
      </TypographyH2>

      <div className="flex flex-col gap-2">
        <TypographyH4 className="w-8/12 xl:text-2xl 2xl:text-3xl">
          {t('heroDescription1')}
        </TypographyH4>
        <TypographyH4 className="w-8/12 xl:text-2xl 2xl:text-3xl">
          {t('heroDescription2')}
        </TypographyH4>
      </div>
      <CollectEmailButton
        size="lg"
        className="2xl:h-18 w-1/3 lg:h-14 lg:text-xl xl:text-2xl 2xl:w-1/2 2xl:text-3xl"
      >
        {t('heroButton')}
      </CollectEmailButton>
    </section>
  );
}
