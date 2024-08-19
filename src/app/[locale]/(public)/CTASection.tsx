'use client';

import { useCallback, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

import { Button } from '@/components/ui/button';

import { type Line, lines } from './data';
import StageCard from './StageCard';

const useMediaQuery = (mediaQuery: string) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((evt: MediaQueryListEvent) => {
    if (evt.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(mediaQuery);

    media.addEventListener('change', updateTarget);

    // Check on mount (callback is not called until a change occurs)
    setTargetReached(media.matches);

    return () => media.removeEventListener('change', updateTarget);
  }, []);

  return targetReached;
};

function StageCards({ line }: StagesLinesProps) {
  return line.stages.map((stage, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <StageCard key={index} className="mx-2" {...stage} index={index} />
  ));
}

function StagesLines(props: StagesLinesProps) {
  const { line } = props;

  const direction = props.line.marqueeElementProps?.direction ?? 'right';

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
    <div className="max:w-fit max:h-screen w-full overflow-hidden">
      {['right', 'left'].includes(direction) ? (
        <Marquee {...marqueeProps} className="w-full overflow-hidden">
          <StageCards line={line} />
        </Marquee>
      ) : (
        <div
          className={`marquee-vertical h-full w-fit ${
            direction === 'down' ? 'marquee-vertical_down' : ''
          }`}
        >
          <div className="marquee-vertical__child flex flex-col gap-8">
            <StageCards line={line} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function CTASection() {
  const isSmallScreen = useMediaQuery('(min-width: 600px)');

  const stagesLines = isSmallScreen
    ? lines.map((line) => ({
        ...line,
        stages: [
          ...line.stages,
          ...line.stages,
          ...line.stages,
          ...line.stages,
        ],
      }))
    : lines;

  return (
    <>
      <div className="bg-neutral-1000 s:h-m4X600 max:h-m4X1920 h-m4X0 border-b-2 border-b-neutral-500" />
      <div className="bg-neutral-1000 max:flex-row flex min-h-screen flex-col items-center justify-between">
        <div className="max:h-screen max:w-auto max:flex-row flex h-1/3 flex-col justify-start gap-6 overflow-hidden">
          <StagesLines line={stagesLines[2] as Line} />
          <StagesLines line={stagesLines[0] as Line} />
        </div>
        <div className="s:p-g4X600 max:p-g4X1920 p-m3X0">
          <h1
            className="s:text-h1X600 max:text-h1X1920 s:mb-g1X600 max:mb-g1X1920 mb-g1X0
                                    text-center text-h1X0 font-medium text-neutral-200"
          >
            Join Thousands of Successful Founders
          </h1>
          <p
            className="s:text-h4X600 max:text-h4X1920 s:mb-g4X600 max:mb-g4X1920
                                    mb-g4X0 text-center text-h4X0 font-normal text-neutral-200"
          >
            Be the first to try — and get something special!
          </p>
          <Button className="mx-auto w-3/5">Sign up for free</Button>
        </div>
        <div className="max:h-screen max:w-auto max:flex-row flex h-1/3 flex-col justify-start gap-6 overflow-hidden">
          <StagesLines line={stagesLines[1] as Line} />
          <StagesLines line={stagesLines[3] as Line} />
        </div>
      </div>
    </>
  );
}

interface StagesLinesProps {
  line: Line;
}
