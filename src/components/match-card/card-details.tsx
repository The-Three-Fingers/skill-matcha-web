import React from 'react';

import { MOCK_PROFILE } from './mock-profile';
import CardSection from './card-section';
import CardDetailItem from './card-detail-item';
import { CardSubtitle } from '../ui/card';
import { useTranslations } from 'next-intl';

const CardDetails = () => {
  const t = useTranslations('matchesProfiles');

  const cardSectionsContent = [
    { title: t('my_ideas'), content: MOCK_PROFILE.ideaDescription },
    { title: t('background'), content: MOCK_PROFILE.experience.background },
    { title: t('about_me'), content: MOCK_PROFILE.experience.aboutMe },
  ];

  const cardDetailItems = [
    { label: t('languages'), value: MOCK_PROFILE.language.join(', ') },
    { label: t('availability'), value: MOCK_PROFILE.timeCommitment },
    { label: t('location'), value: MOCK_PROFILE.location },
    {
      label: t('years_of_experience'),
      value: `${MOCK_PROFILE.experience.yearsOfExperience} years`,
    },
    {
      label: t('personal_interests'),
      value: MOCK_PROFILE.interests.personalInterests,
    },
  ];

  return (
    <div className="flex w-full justify-center gap-6 bg-zinc-300 p-10 px-6 md:px-24 lg:mx-auto">
      <div className="flex flex-col gap-6 rounded-sm lg:w-10/12 xl:w-[800px]">
        {cardSectionsContent.map((section, index) => (
          <CardSection
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}

        <div className="flex flex-col">
          <CardSubtitle className="rounded-t-sm bg-neutral-400 px-4 py-2">
            Additional Information
          </CardSubtitle>

          <div className="flex flex-col gap-2 rounded-b-sm bg-white p-6">
            {cardDetailItems.map((item, index) => (
              <CardDetailItem
                key={index}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
