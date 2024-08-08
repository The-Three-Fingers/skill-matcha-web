import Image from 'next/image';
import React from 'react';

import { Button } from '../ui/button';
import { Icons } from '../ui/icons';
import { MOCK_PROFILE } from './mockProfile';
import myImage from './mockProfilePhoto.jpg';

const CardHeader = () => {
  return (
    <div className="rounded-t-md bg-primary p-6">
      <div className="flex w-full gap-6 rounded-sm bg-white p-6">
        <div className="flex w-20 flex-col justify-between">
          <div className="size-20 bg-slate-300">
            <Image src={myImage} alt="Profile Photo" className="rounded-md" />
          </div>
          <Button className="w-20 gap-2">
            <Icons.HeartIcon />
            Save
          </Button>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <div>
            <h1 className="text-2xl font-bold">{MOCK_PROFILE.name}</h1>
            <ul>
              {MOCK_PROFILE.status.map((status) => (
                <li key={status}>
                  <h3>{status}</h3>
                </li>
              ))}
            </ul>
          </div>
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

export default CardHeader;
