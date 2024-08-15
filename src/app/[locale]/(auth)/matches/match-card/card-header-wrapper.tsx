import Image from 'next/image';
import React from 'react';

import { CardTitle } from '@/components/ui/card';
import { TypographyH4, TypographySmall } from '@/components/ui/typography';

import { MOCK_PROFILE } from './mock-profile';
import mockImage from './mock-profile-photo.jpg';

const CardHeaderWrapper = () => {
  return (
    <div className="flex w-full justify-center bg-primary px-6 py-10 md:px-24 lg:mx-auto">
      <div className="flex w-full gap-6 rounded-md bg-white p-6 lg:w-10/12 xl:w-[800px]">
        <div className="flex w-20 flex-col justify-between">
          <div className="size-20 bg-slate-300">
            <Image src={mockImage} alt="Profile Photo" className="rounded-md" />
          </div>
        </div>

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
            <TypographySmall>I am a: {MOCK_PROFILE.role}</TypographySmall>

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
              <li
                key={howICanHelp}
                className="inline-flex items-center rounded-full bg-purple-300 px-3 py-1 text-sm text-purple-800"
              >
                {howICanHelp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardHeaderWrapper;
