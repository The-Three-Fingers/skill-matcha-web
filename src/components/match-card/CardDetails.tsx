import React from 'react';

import { MOCK_PROFILE } from './mockProfile';

const CardDetails = () => {
  return (
    <div className="flex w-full justify-center gap-6 bg-zinc-300 p-10 px-6 md:px-24 lg:mx-auto">
      <div className="flex flex-col gap-6 rounded-sm lg:w-9/12">
        <div>
          <div className="flex flex-col">
            <h3 className="rounded-t-sm bg-neutral-400 px-4 py-2">My idea</h3>
            <div className="rounded-b-sm bg-white p-10">
              <p>{MOCK_PROFILE.ideaDescription}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="rounded-t-sm bg-neutral-400 px-4 py-2">Background</h3>
          <div className="rounded-b-sm bg-white p-10">
            <p>{MOCK_PROFILE.experience.background}</p>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="rounded-t-sm bg-neutral-400 px-4 py-2">About me</h3>
          <div className="rounded-b-sm bg-white p-10">
            <p>{MOCK_PROFILE.experience.aboutMe}</p>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="rounded-t-sm bg-neutral-400 px-4 py-2">
            Additional Information
          </h3>
          <div className="flex flex-col gap-2 rounded-b-sm bg-white p-10">
            <div className="rounded-md bg-zinc-100 p-4">
              Languages spoken: {MOCK_PROFILE.language.join(', ')}
            </div>

            <div className="rounded-md bg-zinc-100 p-4">
              Available time per week: {MOCK_PROFILE.timeCommitment}
            </div>

            <div className="rounded-md bg-zinc-100 p-4">
              Location: {MOCK_PROFILE.location}
            </div>

            <div className="rounded-md bg-zinc-100 p-4">
              I have {MOCK_PROFILE.experience.yearsOfExperience} years of
              experience
            </div>

            <div className="rounded-md bg-zinc-100 p-4">
              Personal interests: {MOCK_PROFILE.interests.personalInterests}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
