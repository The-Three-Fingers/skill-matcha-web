import { getTranslations } from 'next-intl/server';
import Marquee from 'react-fast-marquee';

import { TypographyH2, TypographyP } from '@/components/ui/typography';

import { CollectEmailButton } from './collect-email-button';
import { type Line, lines } from './data';
import UserCard from './user-card';

interface StagesLinesProps {
  line: Line;
}

function UserCards({ line }: StagesLinesProps) {
  return line.stages.map((stage, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <UserCard key={index} className="mx-2" stage={stage} index={index} />
  ));
}

function StagesLines(props: StagesLinesProps) {
  const { line } = props;

  const direction = props.line.marqueeElementProps?.direction ?? 'right';

  // if we decide to make vertical lines for large screens, uncomment the code

  // if (isMax && direction === 'right') {
  //   direction = 'down';
  // } else if (isMax && direction === 'left') {
  //   direction = 'up';
  // } else if (isMax && !direction) {
  //   direction = 'down';
  // } else if (!direction) {
  //   direction = 'right';
  // }

  const marqueeProps = {
    ...line.marqueeElementProps,
    direction,
  };

  return (
    <div className="size-full overflow-hidden py-1 md:py-2">
      {['right', 'left'].includes(direction) ? (
        <Marquee {...marqueeProps} className="size-full overflow-hidden py-8">
          <UserCards line={line} />
        </Marquee>
      ) : (
        <div
          className={`marquee-vertical h-full w-fit ${
            direction === 'down' ? 'marquee-vertical_down' : ''
          }`}
        >
          <div className="marquee-vertical__child flex flex-col gap-8">
            <UserCards line={line} />
          </div>
        </div>
      )}
    </div>
  );
}

export default async function CTASection() {
  const t = await getTranslations('landing');

  const stagesLines = lines.map((line) => ({
    ...line,
    stages: [...line.stages, ...line.stages, ...line.stages, ...line.stages],
  }));

  return (
    <div className="lg:gap-18 flex w-full flex-col items-center gap-10 py-20 md:gap-14 lg:py-32 xl:gap-20 bg-primary/15">
      <div className="flex h-1/3 w-full flex-col justify-start gap-1 overflow-hidden lg:gap-5">
        <StagesLines line={stagesLines[0] as Line} />
        <StagesLines line={stagesLines[1] as Line} />
      </div>

      <div className="flex flex-1 flex-col justify-center text-center">
        <TypographyH2 className="border-none leading-10 md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
          {t('ctaTitle')}
        </TypographyH2>

        <TypographyP className="mb-6 md:text-lg lg:mb-6 lg:text-xl xl:mb-16 xl:text-2xl 2xl:text-3xl">
          {t('ctaDescription1')}
          <br />
          {t('ctaDescription2')}
          <br />
          {t('ctaDescription3')}
        </TypographyP>
        <CollectEmailButton
          size="lg"
          className="mx-auto w-1/2 lg:w-2/3 lg:h-14 lg:text-xl xl:text-2xl 2xl:w-2/3 2xl:text-3xl"
        >
          {t('descriptionButton')}
        </CollectEmailButton>
      </div>
      <div className="flex h-1/3 w-full flex-col justify-start gap-4 overflow-hidden lg:gap-5">
        <StagesLines line={stagesLines[2] as Line} />
        <StagesLines line={stagesLines[3] as Line} />
      </div>
    </div>
  );
}
