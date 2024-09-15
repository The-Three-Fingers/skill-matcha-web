'use client';

import { notFound, useParams } from 'next/navigation';

import { Spinner } from '@/components/ui/spinner';
import { useGetMatchProfile } from '@/hooks/queries/use-get-match-profile';

import { FooterButtons } from '../components/footer-buttons';
import { ProfileCard } from '../components/profile-card';

const MatcheCardPage = () => {
  const { matchId } = useParams<{ matchId: string }>();

  const { isLoading, data: currentProfile } = useGetMatchProfile({
    id: matchId,
  });

  if (isLoading) {
    return (
      <div className="flex size-full items-center justify-center">
        <Spinner className="size-20 text-primary" />
      </div>
    );
  }

  if (!currentProfile) {
    notFound();
  }

  return (
    <div className="relative mx-auto flex size-full max-w-4xl flex-col justify-center px-14 pb-[70px] pt-4">
      <ProfileCard matchProfile={currentProfile} />

      <FooterButtons />
    </div>
  );
};

export default MatcheCardPage;
