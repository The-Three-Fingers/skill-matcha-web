import { Network, Bot, Handshake } from 'lucide-react';

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
        className={`relative z-40 flex w-4/5 flex-col items-start justify-start rounded-lg shadow-md ${className || 'bg-white'}`}
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
  return (
    <section className="overflow-hidden py-16">
      <TypographyH2 className="mb-8 border-none text-center">
        Why Choose Us?
      </TypographyH2>

      <div className="flex w-full flex-col items-center justify-center gap-8 xl:relative xl:w-auto xl:flex-row">
        <div
          className="absolute left-0 top-[calc(50%_-_1px)] z-20 hidden
                        h-px w-full border-2 border-dashed border-primary xl:block"
        />
        <FeatureHighlightCard
          title="Find Your Perfect Match"
          description="Discover co-founders with the skills you need and align your startup vision for success."
          icon={
            <Handshake height={32} width={32} className={iconClasses} />
          }
          className="group bg-white hover:bg-primary "
          handleClassName="group-hover:bg-gray-100"
        />
        <FeatureHighlightCard
          title="AI-Powered Matching"
          description="Use our AI to find compatible partners and streamline your path to startup success"
          icon={
            <Bot height={32} width={32} className={iconClasses} />
          }
          className="group bg-white hover:bg-primary hover:text-white "
          handleClassName="group-hover:bg-white"
        />
        <FeatureHighlightCard
          title="Expand Your Network"
          description="Tap into a vast talent pool to build your dream team and create the best product together."
          icon={
            <Network height={32} width={32} className={iconClasses} />
          }
          className="group bg-white hover:bg-primary hover:text-white "
          handleClassName="group-hover:bg-white"
        />
      </div>
    </section>
  );
}
