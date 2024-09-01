import Image from 'next/image';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardTitle } from '@/components/ui/card';
import { TypographyH4, TypographySmall } from '@/components/ui/typography';

import { MOCK_PROFILE } from './mock-profile';
import mockImage from './mock-profile-photo.jpg';

const CardHeaderWrapper = () => {
  return (
    <div className="bg-primary/70 px-4 py-10 dark:bg-primary/50">
      <Card className="mx-auto flex w-full max-w-screen-lg items-start gap-6 p-6">
        <Image
          width={96}
          height={96}
          src={mockImage}
          alt="Profile Photo"
          className="size-24 rounded-full object-cover"
        />

        <div className="flex flex-1 flex-col gap-2">
          <div>
            <div>
              <CardTitle className="mb-1">{MOCK_PROFILE.name}</CardTitle>
              <ul>
                {MOCK_PROFILE.status.map((status) => (
                  <li key={status}>
                    <p className="font-medium">{status}</p>
                  </li>
                ))}
              </ul>
            </div>
            <TypographySmall>I am: {MOCK_PROFILE.role}</TypographySmall>

            <h4>
              I am looking for:
              {MOCK_PROFILE.seeking.who.map((seekingProfile) => (
                <TypographySmall key={seekingProfile}>
                  {seekingProfile}
                </TypographySmall>
              ))}
            </h4>

            <h4>
              My idea in industry:
              <ul>
                {MOCK_PROFILE.ideaArea.map((ideaArea) => (
                  <li key={ideaArea}>
                    <p>{ideaArea}</p>
                  </li>
                ))}
              </ul>
            </h4>
          </div>
        </div>

        <div className="w-48">
          <TypographyH4 className="mb-2">Matching with you</TypographyH4>
          <ul className="flex flex-wrap gap-2">
            {MOCK_PROFILE.howICanHelp.map((howICanHelp) => (
              <li key={howICanHelp}>
                <Badge variant="primary-border">{howICanHelp}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default CardHeaderWrapper;
