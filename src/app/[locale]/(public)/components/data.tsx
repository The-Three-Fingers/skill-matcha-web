import type Marquee from 'react-fast-marquee';

interface BaseStage {
  title: string;
}

type Stage = BaseStage &
  (
    | {
        active: true;
        brandColor: 'primary-500' | 'secondary' | 'gray';
      }
    | {
        active?: false;
        brandColor?: 'primary-500' | 'secondary' | 'gray';
      }
  );

export interface Line {
  stages: Stage[];
  marqueeElementProps?: React.ComponentProps<typeof Marquee>;
}

export const lines: Line[] = [
  {
    marqueeElementProps: {
      direction: 'right',
      speed: 23,
    },
    stages: [
      {
        title: 'Basic Interview',
      },
      {
        title: 'AI Video Interview',

        active: true,
        brandColor: 'secondary',
      },
      {
        title: 'NDA',
      },
      {
        title: 'Group Interview',
      },
      {
        title: 'Job Offer',
      },
    ],
  },
  {
    marqueeElementProps: {
      direction: 'left',
      speed: 25,
    },
    stages: [
      {
        title: 'NDA',
      },
      {
        title: 'Group Interview',
      },
      {
        title: 'Resume Screening',

        active: true,
        brandColor: 'primary-500',
      },
      {
        title: 'AI Video Interview',
      },
      {
        title: 'NDA',
      },
    ],
  },
  {
    marqueeElementProps: {
      direction: 'left',
      speed: 27,
    },
    stages: [
      {
        title: 'NDA',

        active: true,
        brandColor: 'primary-500',
      },
      {
        title: 'Job Offer',
      },
      {
        title: 'Resume Screening',
      },
      {
        title: 'Basic Interview',

        active: true,
        brandColor: 'secondary',
      },
      {
        title: 'Group Interview',
      },
    ],
  },
  {
    marqueeElementProps: {
      direction: 'right',
      speed: 29,
    },
    stages: [
      {
        title: 'NDA',

        active: true,
        brandColor: 'primary-500',
      },
      {
        title: 'Job Offer',
      },
      {
        title: 'Resume Screening',
      },
      {
        title: 'Basic Interview',

        active: true,
        brandColor: 'secondary',
      },
      {
        title: 'Group Interview',
      },
    ],
  },
];
