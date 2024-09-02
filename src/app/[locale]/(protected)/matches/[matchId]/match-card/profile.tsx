import { Clock, Languages, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardDescription } from '@/components/ui/card';
import {
  TypographyH3,
  TypographyLarge,
  TypographySmall,
} from '@/components/ui/typography';

import { MOCK_PROFILE } from './mock-profile';
import mockImage from './mock-profile-photo.jpg';

const Profile = () => {
  const t = useTranslations('matches');

  const cardSectionsContent = [
    { title: t('idea'), content: MOCK_PROFILE.ideaDescription },
    { title: t('about_me'), content: MOCK_PROFILE.aboutMe },
  ];

  return (
    <Card className="mx-auto flex w-full max-w-screen-sm flex-col gap-6 p-6">
      <div className="flex w-full flex-col items-center gap-6 sm:flex-row">
        <Image
          width={300}
          height={300}
          src={mockImage}
          alt="Profile Photo"
          className="size-32 flex-none rounded-full object-cover"
        />
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-3">
            <TypographyH3>{MOCK_PROFILE.name}</TypographyH3>
            <TypographySmall className="text-secondary-foreground">
              {MOCK_PROFILE.role}
            </TypographySmall>
            {MOCK_PROFILE.hasIdea && (
              <TypographySmall className="text-primary">
                Have an idea for startup
              </TypographySmall>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <TypographySmall className="flex items-center gap-2 text-muted-foreground">
              <Clock className="size-4" /> {MOCK_PROFILE.timeCommitment}
            </TypographySmall>
            <TypographySmall className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4" /> {MOCK_PROFILE.location}
            </TypographySmall>
            <TypographySmall className="flex items-center gap-2 text-muted-foreground">
              <Languages className="size-4" />
              {MOCK_PROFILE.language.join(', ')}
            </TypographySmall>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <TypographyLarge>Looking for</TypographyLarge>
          <ul className="flex flex-wrap gap-2">
            {MOCK_PROFILE.seeking.who.map((seekingProfile) => (
              <li key={seekingProfile}>
                <Badge variant="outline">{seekingProfile}</Badge>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <TypographyLarge>Matching with you</TypographyLarge>
          <ul className="flex flex-wrap gap-2">
            {MOCK_PROFILE.howICanHelp.map((howICanHelp) => (
              <li key={howICanHelp}>
                <Badge variant="primary-border">{howICanHelp}</Badge>
              </li>
            ))}
          </ul>
        </div>
        {cardSectionsContent.map((section) => (
          <div key={section.title} className="flex flex-wrap gap-2">
            <TypographyLarge>{section.title}</TypographyLarge>
            <CardDescription>{section.content}</CardDescription>
          </div>
        ))}
      </div>
    </Card>
  );
};

export { Profile };
