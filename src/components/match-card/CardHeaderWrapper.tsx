import Image from 'next/image';
import React from 'react';

import { CardDescription, CardHeader, CardTitle } from '../ui/card';
import { MOCK_PROFILE } from './mockProfile';
import mockImage from './mockProfilePhoto.jpg';

const CardHeaderWrapper = () => {
  return (
    <div className="flex w-full justify-center bg-primary px-6 py-10 md:px-24 lg:mx-auto">
      <div className="flex w-full gap-6 rounded-md bg-white p-6 lg:w-9/12">
        <div className="flex w-20 flex-col justify-between">
          <div className="size-20 bg-slate-300">
            <Image src={mockImage} alt="Profile Photo" className="rounded-md" />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <div>
            <CardHeader>
              <CardTitle>{MOCK_PROFILE.name}</CardTitle>
              <CardDescription>
                <ul>
                  {MOCK_PROFILE.status.map((status) => (
                    <li key={status}>
                      <h3>{status}</h3>
                    </li>
                  ))}
                </ul>

                <h4>Im a: {MOCK_PROFILE.role}</h4>

                <h4>
                  Im looking for:
                  <ul>
                    {MOCK_PROFILE.seeking.who.map((seekingProfile) => (
                      <li key={seekingProfile}>
                        <h3>{seekingProfile}</h3>
                      </li>
                    ))}
                  </ul>
                </h4>

                <h4>
                  My idea in industry:
                  <ul>
                    {MOCK_PROFILE.ideaArea.map((ideaArea) => (
                      <li key={ideaArea}>
                        <h3>{ideaArea}</h3>
                      </li>
                    ))}
                  </ul>
                </h4>
              </CardDescription>
            </CardHeader>
          </div>
        </div>

        <div className="w-48">
          <h2 className="pb-3">Matching with you</h2>
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
