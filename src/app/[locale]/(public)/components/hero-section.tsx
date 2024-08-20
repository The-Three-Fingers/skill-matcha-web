import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { TypographyH2, TypographyH4 } from '@/components/ui/typography';

interface HeroProps {
  onSignUp: () => void;
}

export default function HeroSection({ onSignUp }: HeroProps) {
  const t = useTranslations('landing');

  return (
    <section className="flex w-full flex-col items-start justify-start gap-10 sm:w-full md:gap-16 xl:mx-auto">
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
      <Button
        size="lg"
        className="w-1/3 xl:w-1/5 xl:text-xl"
        onClick={onSignUp}
      >
        {t('heroButton')}
      </Button>
    </section>
  );
}
