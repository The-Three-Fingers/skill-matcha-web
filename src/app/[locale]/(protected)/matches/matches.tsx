'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { TypographyH4 } from '@/components/ui/typography';
import { useGetMatches } from '@/hooks/queries/use-get-matches';

import ChevronButton from './components/chevron-button';
import { FooterButtons } from './components/footer-buttons';
import { ProfileCard } from './components/profile-card';

const defaultLimit = 10;

const Matches = () => {
  const t = useTranslations('matches');

  const [page, setPage] = useState(1);

  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const { data: matchProfiles, isLoading } = useGetMatches({
    offset: (page - 1) * defaultLimit,
  });

  const isFirstProfile = page === 1 && currentProfileIndex === 0;

  const goToNextProfile = () => {
    if (!matchProfiles?.length) return;

    if (currentProfileIndex === matchProfiles.length - 1) {
      setPage((prev) => prev + 1);
      setCurrentProfileIndex(0);

      return;
    }

    setCurrentProfileIndex((prev) => prev + 1);
  };

  const goToPrevProfile = () => {
    if (currentProfileIndex === 0 && page > 1) {
      setPage((prev) => prev - 1);
      setCurrentProfileIndex(defaultLimit - 1);

      return;
    }

    setCurrentProfileIndex((prev) => prev - 1);
  };

  const hasProfiles = Boolean(matchProfiles?.length);

  if (isLoading) {
    return (
      <div className="flex size-full items-center justify-center">
        <Spinner className="size-20 text-primary" />
      </div>
    );
  }

  if (!hasProfiles) {
    return (
      <div className="mx-auto flex size-full max-w-4xl flex-col items-center justify-center gap-4 px-14 pb-[70px] pt-4">
        <TypographyH4>{t('noMatchedProfilesFound')}</TypographyH4>
        <Button asChild>
          <Link href="/settings/match-preferences">
            {t('goToPreferencesSettings')}
          </Link>
        </Button>
      </div>
    );
  }

  const currentProfile = matchProfiles?.[currentProfileIndex];

  if (!currentProfile) {
    return null;
  }

  return (
    <div className="relative mx-auto flex size-full max-w-4xl flex-col justify-center px-14 pb-[70px] pt-4">
      <ProfileCard matchProfile={currentProfile} />

      <div className="fixed bottom-1/2 left-0 h-10 w-full translate-y-1/2">
        <div className="mx-auto flex w-full max-w-5xl px-2">
          {!isFirstProfile && <ChevronButton onClick={goToPrevProfile} />}
          <ChevronButton
            onClick={goToNextProfile}
            className="ml-auto rotate-180"
          />
        </div>
      </div>

      {currentProfile && <FooterButtons />}
    </div>
  );
};

export { Matches };
