import { TypographySmall } from '@/components/ui/typography';
import Image from 'next/image';
import React from 'react';
import { Zap } from 'lucide-react';

interface BaseUserCardProps {
  index: number;
  title: string;
  hasIdea?: string;
  className?: string;
  textClassname?: string;
}

export type UserCardProps = BaseUserCardProps &
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

function UserCard({
  index,
  className,
  brandColor: brandColor = 'primary',
  textClassname,
  title,
  hasIdea,
  active: active = false,
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
      className={`text-slate-800 dark:text-neutral-200 group inline-flex rounded-lg flex-col items-center 
        size-32 md:size-30 md:size-36 max:size-[200px] gap-1 p-2 transition md:p-3 lg:gap-2 xl:p-4 shadow-soft-outline bg-opacity-[0.01] ${className} ${
        active
          ? `border-${brandColor} border-2 border-solid${brandColor} bg-opacity-[0.01]`
          : 'bg-white dark:bg-green-950 '
      }`}
    >
      <div
        className={`inline-flex items-center justify-center gap-2 relative transition ${
          active
            ? `[&>svg>path]:fill-${brandColor} [&>svg>g>path]:fill-${brandColor} ${textClassname}`
            : '[&>svg>g>path]:fill-neutral-500 [&>svg>path]:fill-neutral-500'
        }`}
      >
        <Image
          width={50}
          height={50}
          className="w-[65px] h-[65px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px]"
          alt="avatar"
          src={`https://avatar.iran.liara.run/public/${index % 2 === 0 ? index + 1 : 100 - (index + 1)}`}
        />
      </div>

      <div className="items-center text-center justify-start gap-2 self-stretch hidden sm:inline-flex">
        <TypographySmall
          className={`truncate whitespace-nowrap overflow-hidden grow basis-0 transition ${textClassname}`}
        >
          {title}
        </TypographySmall>
      </div>


        <div className="flex flex-col items-center gap-1.5">
          <div className="inline-flex items-center text-center justify-start gap-2 self-stretch">
            <TypographySmall
              className={`line-clamp-1 md:line-clamp-2 grow basis-0 transition ${
                active
                  ? `text-${brandColor}`
                  : `text-neutral-500 ${textClassname}
              ${hasIdea && `text-primary`}`
              }`}
            >
              {hasIdea ? hasIdea : 'Co-Founder Candidate'}
            </TypographySmall>
          </div>
          {/* <div className="hidden md:inline-flex">
            <Zap className="size-4" />
          </div> */}
        </div>

    </div>
  );
}

export default UserCard;
