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

      <TypographyH4 className="xl:text-2xl">
        {t('heroDescription1')} <br />
        {t('heroDescription2')}
      </TypographyH4>
      <CollectEmailButton size="lg" className="w-1/3 xl:w-1/4 xl:text-xl">
        {t('heroButton')}
      </CollectEmailButton>
    </section>
  );
}
