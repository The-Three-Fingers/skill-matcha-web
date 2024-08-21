import { Bot, Handshake, type LucideIcon, Network } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { TypographyH2 } from '@/components/ui/typography';

interface FeatureHighlightCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

function FeatureHighlightCard({
  title,
  description,
  icon: Icon,
}: FeatureHighlightCardProps) {
  return (
    <div className="group relative z-40 flex size-full h-80 flex-1 flex-col items-start justify-start rounded-lg bg-white px-4 shadow-md transition-all hover:bg-primary hover:text-white md:max-w-80">
      <div className="flex flex-col items-start justify-center gap-4 self-stretch p-6">
        <Icon className="size-8 text-primary group-hover:text-white" />
        <div>
          <h4 className="mb-4 text-xl font-semibold text-gray-900">{title}</h4>
          <p className="text-base font-normal text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesHighlights() {
  const t = useTranslations('landing');

  return (
    <section className="relative mb-10 w-full bg-primary/15 bg-landing bg-[length:45%_100%] bg-right-bottom bg-no-repeat py-32 lg:py-56">
      <TypographyH2 className="mb-8 border-none text-center md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
        {t('featuresTitle')}
      </TypographyH2>

      <div className="flex w-full flex-col items-center justify-center gap-6 px-4 md:relative md:flex-row md:gap-4 lg:gap-10">
        <FeatureHighlightCard
          title={t('featuresCardTitle1')}
          description={t('featuresCardDescription1')}
          icon={Handshake}
        />
        <FeatureHighlightCard
          title={t('featuresCardTitle2')}
          description={t('featuresCardDescription2')}
          icon={Bot}
        />
        <FeatureHighlightCard
          title={t('featuresCardTitle3')}
          description={t('featuresCardDescription3')}
          icon={Network}
        />
      </div>
    </section>
  );
}
