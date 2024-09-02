'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import {
  type MatchProfile,
  useGetMatches,
} from '@/hooks/queries/use-get-matches';
import { useProfile } from '@/providers/ProfileContext';

const Matches = () => {
  const router = useRouter();

  const { profile } = useProfile();

  const { data: matches, isLoading } = useGetMatches(profile.searchPreferences);

  const hasMatches = Boolean(matches?.length);

  useEffect(() => {
    if (!hasMatches) {
      return;
    }

    const firstMatch = matches?.[0] as MatchProfile;

    router.replace(`/matches/${firstMatch.id}`);
  }, [hasMatches, matches, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return !hasMatches && <div>No Matches Found</div>;
};

export { Matches };
