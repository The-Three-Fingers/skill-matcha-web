import { useTranslations } from 'next-intl';
import React from 'react';

import { TypographySmall } from '@/components/ui/typography';

import CardDetailItem from './card-detail-item';
import CardSection from './card-section';
import { MOCK_PROFILE } from './mock-profile';

const CardDetails = () => {
  const t = useTranslations('matches');

  const cardSectionsContent = [
    { title: t('my_ideas'), content: MOCK_PROFILE.ideaDescription },
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
    <div className="px-4 py-10">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-6 rounded-sm">
        {cardSectionsContent.map((section) => (
          <CardSection
            key={section.title}
            title={section.title}
            content={section.content}
          />
        ))}

        <div className="flex flex-col">
          <TypographySmall className="rounded-t-sm bg-neutral-400 px-4 py-2">
            Additional Information
          </TypographySmall>

          <ul className="flex flex-col gap-2 rounded-b-sm bg-white p-6">
            {cardDetailItems.map((item) => (
              <CardDetailItem
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
