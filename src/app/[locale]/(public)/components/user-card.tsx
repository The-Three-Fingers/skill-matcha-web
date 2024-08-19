import Image from 'next/image';
import React from 'react';

interface BaseUserCardProps {
  index: number;
  title: string;
  className?: string;
  textClassname?: string;
}

type UserCardProps = BaseUserCardProps &
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

function UserCard({
  index,
  className,
  brandColor,
  textClassname,
  title,
  active,
}: UserCardProps) {
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
      className={`max:size-[200px] group inline-flex size-32 flex-col items-center justify-center gap-1 rounded-lg p-2 transition md:size-36 md:p-3 lg:gap-3 xl:p-4 ${className} ${
        active
          ? `bg-${brandColor} border-2 border-solid${brandColor} bg-opacity-[0.01]`
          : 'bg-white bg-opacity-[0.01]'
      }`}
    >
      <div className="inline-flex items-center justify-center gap-2">
        <div
          className={`relative transition ${
            active
              ? `[&>svg>path]:fill-${brandColor} [&>svg>g>path]:fill-${brandColor} ${textClassname}`
              : '[&>svg>g>path]:fill-neutral-500 [&>svg>path]:fill-neutral-500'
          }`}
        >
          <Image
            width={50}
            height={50}
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px]"
            alt="avatar"
            src={`https://avatar.iran.liara.run/public/${index % 2 === 0 ? index + 1 : 100 - (index + 1)}`}
          />
        </div>
      </div>
      <div className="inline-flex items-center justify-start gap-2 self-stretch">
        <div
          className={`shrink grow basis-0 text-center transition ${
            active ? `text-${brandColor}` : `text-neutral-500 ${textClassname}`
          }`}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
