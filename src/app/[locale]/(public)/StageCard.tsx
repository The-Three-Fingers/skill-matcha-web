import Image from 'next/image';
import React from 'react';

interface BaseStageCardProps {
  index: number;
  title: string;
  className?: string;
  textClassname?: string;
}

type StageCardProps = BaseStageCardProps &
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

function StageCard({
  index,
  className,
  brandColor,
  textClassname,
  title,
  active,
}: StageCardProps) {
  // we need to include these classes for tailwind
  // const classes = [
  //   'bg-primary-500',
  //   'bg-secondary',
  //   'bg-gray',
  //   '[&>svg>path]:fill-primary-500 [&>svg>g>path]:fill-primary-500',
  //   '[&>svg>path]:fill-secondary [&>svg>g>path]:fill-secondary',
  //   '[&>svg>path]:fill-gray [&>svg>g>path]:fill-gray',
  //   'text-primary-500',
  //   'text-secondary',
  //   'text-gray',
  //   'border-primary-500',
  //   'border-secondary',
  //   'border-gray',
  // ];

  return (
    <div
      className={`s:size-h9x600 max:size-h9X1920 s:gap-g2X600 max:gap-g2X1920 group inline-flex size-h9X0 flex-col items-center
                        justify-center gap-g2X0 rounded-lg p-4 transition
                        ${className} ${
                          active
                            ? `bg-${brandColor} border- border-2 border-solid${brandColor} bg-opacity-[0.01]`
                            : 'bg-white bg-opacity-[0.01]'
                        }`}
    >
      <div className="inline-flex items-center justify-center gap-2">
        <div
          className={`s:text-h2X600 max:text-h2X1920 relative text-h2X0 transition ${
            active
              ? `[&>svg>path]:fill-${brandColor} [&>svg>g>path]:fill-${brandColor} ${textClassname}`
              : '[&>svg>g>path]:fill-neutral-500 [&>svg>path]:fill-neutral-500'
          }`}
        >
          <Image
            width={50}
            height={50}
            alt="avatar"
            src={`https://avatar.iran.liara.run/public/${index % 2 === 0 ? index + 1 : 100 - (index + 1)}`}
          />
        </div>
      </div>
      <div className="inline-flex items-center justify-start gap-2 self-stretch">
        <div
          className={`s:text-descriptionX600 max:text-descriptionX1920 shrink grow basis-0 text-center text-descriptionX0 transition ${
            active ? `text-${brandColor}` : `text-neutral-500 ${textClassname}`
          }`}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

export default StageCard;
