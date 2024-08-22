import type Marquee from 'react-fast-marquee';

export interface Stage {
  name: string;
  role: string;
  idea?: string;
}

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
        name: 'Alex',
        role: 'Developer',
        idea: 'Virtual Assistant App',
      },
      {
        name: 'Robin',
        role: 'Marketing Specialist',
      },
      {
        name: 'Casey',
        role: 'CTO',
      },
      {
        name: 'Max',
        role: 'Designer',
      },
      {
        name: 'Cameron',
        role: 'Product Manager',
        idea: 'E-commerce Platform',
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
        name: 'Charlie',
        role: 'Founder',
        idea: 'Remote Workspace Platform',
      },
      {
        name: 'Taylor',
        role: 'Developer',
      },
      {
        name: 'Riley',
        role: 'CEO',
        idea: 'Mental Wellness Product',
      },
      {
        name: 'Ellis',
        role: 'Product Manager',
      },
      {
        name: 'Jordan',
        role: 'Marketing Specialist',
      },
    ],
  },
  {
    marqueeElementProps: {
      direction: 'right',
      speed: 27,
    },
    stages: [
      {
        name: 'Charlie',
        role: 'Founder',
        idea: 'Remote Workspace Platform',
      },
      {
        name: 'Taylor',
        role: 'Developer',
      },
      {
        name: 'Riley',
        role: 'CEO',
        idea: 'Mental Wellness Product',
      },
      {
        name: 'Ellis',
        role: 'Product Manager',
      },
      {
        name: 'Jordan',
        role: 'Marketing Specialist',
      },
    ],
  },
  {
    marqueeElementProps: {
      direction: 'left',
      speed: 29,
    },
    stages: [
      {
        name: 'Alex',
        role: 'Developer',
        idea: 'Virtual Assistant App',
      },
      {
        name: 'Robin',
        role: 'Marketing Specialist',
      },
      {
        name: 'Casey',
        role: 'CTO',
      },
      {
        name: 'Max',
        role: 'Designer',
      },
      {
        name: 'Cameron',
        role: 'Product Manager',
        idea: 'E-commerce Platform',
      },
    ],
  },
];
