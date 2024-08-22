'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */
import { Heart, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { TypographySmall } from '@/components/ui/typography';
import { cn } from '@/libs/utils';

import type { Stage } from './data';

interface UserCardProps {
  index: number;
  stage: Stage;
  className?: string;
}

function UserCard({ index, className, stage }: UserCardProps) {
  const { name, idea } = stage;

  const [isDisliked, setIsDisliked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsDisliked(false);
    setIsLiked(true);
  };

  const handleDislike = () => {
    setIsLiked(false);
    setIsDisliked(true);
  };

  return (
    <div
      className={cn(
        'relative size-44 gap-1 p-4 transition md:p-3 lg:gap-2',
        'group inline-flex flex-col items-center justify-between rounded-lg bg-background border-2 border-background dark:border-accent text-foreground cursor-pointer shadow-soft-outline',
        'dark:shadow-none',
        {
          'bg-accent border-accent dark:border-accent': isDisliked,
          'border-primary dark:border-primary': isLiked,
        },
        className,
      )}
    >
      <Image
        width={56}
        height={56}
        className="size-14"
        alt="avatar"
        src={`https://avatar.iran.liara.run/public/${index % 2 === 0 ? index + 1 : 100 - (index + 1)}`}
      />

      <TypographySmall className="w-full overflow-hidden truncate whitespace-nowrap text-center">
        {name}
      </TypographySmall>

      <TypographySmall
        className={cn('line-clamp-2 gap-1 text-center text-foreground/40', {
          'text-primary': idea,
        })}
      >
        {idea ?? 'Co-Founder Candidate'}
      </TypographySmall>

      <div className="absolute -inset-0.5 flex  items-center justify-center gap-5 rounded-lg bg-foreground/50 opacity-0 transition-all group-hover:opacity-100 dark:bg-background/80">
        <Button
          className="-translate-x-4 scale-125 text-destructive/80 opacity-0 transition-all hover:text-destructive group-hover:translate-x-0 group-hover:opacity-100"
          onClick={handleDislike}
          variant="link"
        >
          <X className="size-8" />
        </Button>
        <Button
          className="translate-x-4 scale-125 text-primary/80 opacity-0 transition-all hover:text-primary group-hover:translate-x-0 group-hover:opacity-100"
          variant="link"
          onClick={handleLike}
        >
          <Heart className="size-8" />
        </Button>
      </div>
    </div>
  );
}

export default UserCard;
