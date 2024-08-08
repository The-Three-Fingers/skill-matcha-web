import React from 'react';

import { MOCK_PROFILE } from './mockProfile';

const CardDetails = () => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-b-md p-10">
      <div>
        <div className="flex flex-col">
          <h3 className="bg-zinc-400 px-4 py-2 rounded-t-sm">My idea</h3>
          <div className="bg-zinc-300 rounded-b-sm p-10">
            <p>{MOCK_PROFILE.ideaDescription}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="bg-zinc-400 px-4 py-2 rounded-t-sm">Background</h3>
        <div className="bg-zinc-300 rounded-b-sm p-10">
          <p>{MOCK_PROFILE.experience.background}</p>
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="bg-zinc-400 px-4 py-2 rounded-t-sm">About me</h3>
        <div className="bg-zinc-300 rounded-b-sm p-10">
          <p>{MOCK_PROFILE.experience.aboutMe}</p>
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="bg-zinc-400 px-4 py-2 rounded-t-sm">
        Additional Information
        </h3>
        <div className="bg-zinc-300 rounded-b-sm p-10 flex flex-col gap-2">
          <div className="bg-white p-4 rounded-md">
          Languages spoken: {MOCK_PROFILE.language.join(', ')}
          </div>

          <div className="bg-white p-4 rounded-md">
            Available time per week: {MOCK_PROFILE.timeCommitment}
          </div>

          <div className="bg-white p-4 rounded-md">
           Location: {MOCK_PROFILE.location}
          </div>

          <div className="bg-white p-4 rounded-md">
            I have {MOCK_PROFILE.experience.yearsOfExperience} years of experience
          </div>

          <div className="bg-white p-4 rounded-md">
            Personal interests: {MOCK_PROFILE.interests.personalInterests} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
