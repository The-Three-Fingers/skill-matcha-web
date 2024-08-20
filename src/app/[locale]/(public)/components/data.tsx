import type Marquee from 'react-fast-marquee';

interface BaseStage {
  title: string;
  hasIdea?: string;
}

type Stage = BaseStage &
  (
    | {
        active: true;
        brandColor: 'primary' | 'secondary';
      }
    | {
        active?: false;
        brandColor?: 'primary' | 'secondary';
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
        title: 'Developer',
        hasIdea: 'Fresh Idea',
        active: true,
        brandColor: 'primary',
      },
      {
        title: 'Marketing Specialist',
      },
      {
        title: 'CTO',
        active: true,
        brandColor: 'secondary',
      },
      {
        title: 'Designer',
        active: true,
        brandColor: 'secondary',
        hasIdea: 'Startup Guru',
      },
      {
        title: 'Product Manager',
        active: true,
        brandColor: 'primary',
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
        title: 'Founder',
        active: true,
        brandColor: 'primary',
        hasIdea: 'Innovation Pro',
      },
      {
        title: 'Developer',
      },
      {
        title: 'CTO',
        brandColor: 'primary',
      },
      {
        title: 'Product Manager',
        active: true,
        brandColor: 'secondary',
        hasIdea: 'Ready to Go',
      },
      {
        title: 'Marketing Specialist',
        brandColor: 'primary',
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
        title: 'Developer',
        hasIdea: 'Have a stunning idea',
        active: true,
        brandColor: 'primary',
      },
      {
        title: 'Product Manager',
        brandColor: 'secondary',
      },
      {
        title: 'Founder',
        active: true,
        brandColor: 'secondary',
        hasIdea: 'Concept Live',
      },
      {
        title: 'Marketing Specialist',
      },
      {
        title: 'Developer',
        active: true,
        brandColor: 'secondary',
        hasIdea: 'Bold Idea',
      },
      {
        title: 'Designer',
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
        title: 'CTO',
      },
      {
        title: 'Designer',
        brandColor: 'primary',
      },
      {
        title: 'Product Manager',
        active: true,
        brandColor: 'primary',
        hasIdea: 'Ready to Go',
      },
      {
        title: 'Marketing Specialist',
      },
      {
        title: 'Founder',
        active: true,
        brandColor: 'primary',
        hasIdea: 'Concept Live',
      },
    ],
  },
];
