'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Spinner } from '@/components/ui/spinner';
import {
  type MatchProfile,
  useGetMatches,
} from '@/hooks/queries/use-get-matches';

const Matches = () => {
  const router = useRouter();

  const { data: matches, isLoading } = useGetMatches();

  const hasMatches = Boolean(matches?.length);

  useEffect(() => {
    if (!hasMatches) {
      return;
    }

    const firstMatch = matches?.[0] as MatchProfile;

    router.replace(`/matches/${firstMatch.id}`);
  }, [hasMatches, matches, router]);

  if (isLoading) {
    return (
      <div className="flex size-full items-center justify-center">
        <Spinner className="size-20 text-primary" />
      </div>
    );
  }

  return !hasMatches && <div>No Matches Found</div>;
};

export { Matches };
