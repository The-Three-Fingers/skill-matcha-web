import { Bot, Handshake, Network } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { TypographyH2 } from '@/components/ui/typography';

const iconClasses = 'group-hover:text-white text-primary';

interface FeatureHighlightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  handleClassName?: string;
}

function FeatureHighlightCard({
  title,
  description,
  icon,
  className,
  handleClassName,
}: FeatureHighlightCardProps) {
  return (
    <div className="relative flex w-full justify-center transition xl:block xl:min-h-56 xl:w-1/6 xl:justify-start">
      {/* Lines */}
      <div className="absolute -right-full left-0 top-[calc(50%_-_1px)] z-20 h-px w-full border-2 border-dashed border-primary xl:hidden" />

      <div
        className={`relative z-40 flex w-full flex-col items-start justify-start rounded-lg shadow-md ${className || 'bg-white'}`}
      >
        <div className="flex flex-col items-start justify-center gap-4 self-stretch p-4">
          {icon}
          <div>
            <h4 className="mb-4 text-xl font-semibold text-gray-900">
              {title}
            </h4>
            <p className="text-base font-normal text-gray-700">{description}</p>
          </div>
        </div>

        {/* Handles */}
        <div
          className={`absolute top-[calc(50%_-_16px)] h-8 w-2 rounded-r-3xl bg-primary transition ${handleClassName}`}
        />
        <div
          className={`absolute right-0 top-[calc(50%_-_16px)] h-8 w-2 rounded-l-3xl bg-primary transition ${handleClassName}`}
        />
      </div>
    </div>
  );
}

export default function FeaturesHighlights() {
  const t = useTranslations('landing');

  return (
    <section className="overflow-hidden py-16">
      <TypographyH2 className="mb-8 border-none text-center">
        {t('featuresTitle')}
      </TypographyH2>

      <div className="flex w-full flex-col items-center justify-center gap-8 xl:relative xl:w-auto xl:flex-row">
        <div
          className="absolute left-0 top-[calc(50%_-_1px)] z-20 hidden
                        h-px w-full border-2 border-dashed border-primary xl:block"
        />
        <FeatureHighlightCard
          title={t('featuresCardTitle1')}
          description={t('featuresCardDescription1')}
          icon={<Handshake height={32} width={32} className={iconClasses} />}
          className="group bg-white hover:bg-primary "
          handleClassName="group-hover:bg-gray-100"
        />
        <FeatureHighlightCard
          title={t('featuresCardTitle2')}
          description={t('featuresCardDescription2')}
          icon={<Bot height={32} width={32} className={iconClasses} />}
          className="group bg-white hover:bg-primary hover:text-white "
          handleClassName="group-hover:bg-white"
        />
        <FeatureHighlightCard
          title={t('featuresCardTitle3')}
          description={t('featuresCardDescription3')}
          icon={<Network height={32} width={32} className={iconClasses} />}
          className="group bg-white hover:bg-primary hover:text-white "
          handleClassName="group-hover:bg-white"
        />
      </div>
    </section>
  );
}
