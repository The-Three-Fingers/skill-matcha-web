import { useTranslations } from 'next-intl';
import Marquee from 'react-fast-marquee';

import { Button } from '@/components/ui/button';
import { TypographyH2, TypographyP } from '@/components/ui/typography';

import { type Line, lines } from './data';
import UserCard from './user-card';

interface StagesLinesProps {
  line: Line;
}

function UserCards({ line }: StagesLinesProps) {
  return line.stages.map((stage, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <UserCard key={index} className="mx-2" {...stage} index={index} />
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
    <div className="max:w-fit max:h-screen size-full overflow-hidden p-1 md:p-2">
      {['right', 'left'].includes(direction) ? (
        <Marquee {...marqueeProps} className="size-full overflow-hidden">
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

interface CTASectionProps {
  onSignUp: () => void;
}

export default function CTASection({ onSignUp }: CTASectionProps) {
  const t = useTranslations('landing');

  const stagesLines = lines.map((line) => ({
    ...line,
    stages: [...line.stages, ...line.stages, ...line.stages, ...line.stages],
  }));

  return (
    <div className="lg:gap-18 flex min-h-screen flex-col items-center gap-10 md:gap-14 xl:gap-20">
      <div className="max:h-screen flex h-1/3 flex-col justify-start gap-1 overflow-hidden lg:gap-5">
        <StagesLines line={stagesLines[2] as Line} />
        <StagesLines line={stagesLines[0] as Line} />
      </div>
      <div className="flex flex-col justify-center text-center">
        <TypographyH2 className="">{t('ctaTitle')}</TypographyH2>
        <TypographyP className="mb-4 lg:mb-6 xl:mb-20">
          {t('ctaDescription1')}
          <br />
          {t('ctaDescription2')}
          <br />
          {t('ctaDescription3')}
        </TypographyP>
        <Button className="mx-auto w-3/5" onClick={onSignUp}>
          {t('descriptionButton')}
        </Button>
      </div>
      <div className="max:h-screen flex h-1/3 flex-col justify-start gap-4 overflow-hidden lg:gap-5">
        <StagesLines line={stagesLines[1] as Line} />
        <StagesLines line={stagesLines[3] as Line} />
      </div>
    </div>
  );
}
