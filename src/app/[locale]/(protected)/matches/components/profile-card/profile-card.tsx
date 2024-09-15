import { MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { TypographyH3 } from '@/components/ui/typography';
import { useCountries } from '@/hooks/queries/use-countries';
import type { MatchProfile } from '@/hooks/queries/use-get-matches';
import { useLanguages } from '@/hooks/queries/use-languages';

const ProfileCard = ({ matchProfile }: { matchProfile: MatchProfile }) => {
  const { data: locationsData } = useCountries();
  const { data: languagesData } = useLanguages();

  const t = useTranslations('profileForm');
  const matchesT = useTranslations('matches');
  const profileT = useTranslations('profile');

  const {
    role,
    subRoles,
    aboutInfo,
    name,
    ideaDescription,
    hasIdea,
    services,
    location,
    languages,
    searchPreferences,
    availabilityTime,
  } = matchProfile;

  const locationName = location
    ? locationsData?.find((loc) => loc.code === location)?.name
    : null;

  const languagesNames = languages
    .map((langCode) => {
      return languagesData?.find((language) => language.code === langCode)
        ?.name;
    })
    .filter(Boolean)
    .join(', ');

  const searchRoles = searchPreferences.map((searchPreference) => {
    return `${t(`roleOptions.${searchPreference.role}`)}`;
  });

  return (
    <Card className="mx-auto w-full max-w-4xl shadow-lg">
      <CardHeader className="flex flex-col items-center gap-4 border-b p-4 sm:flex-row sm:gap-6 sm:p-6">
        <Avatar className="size-24 border-2 border-primary">
          <AvatarImage alt={name} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            {name[0]?.toLocaleUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="grow text-center sm:text-left">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-start">
            <TypographyH3 className="text-2xl font-bold sm:text-3xl">
              {name}
            </TypographyH3>
            {/* <Badge className="px-3 py-1 text-base" variant="secondary">
              85% Match
            </Badge> */}
          </div>
          <p className="mt-1 text-lg text-muted-foreground sm:text-xl">
            {t(`roleOptions.${role}`)} (
            {subRoles
              .map((subRole) => t(`subRoleOptions.${subRole}`))
              .join(', ')}
            )
          </p>
          {locationName && (
            <div className="mt-2 flex items-center justify-center text-base text-muted-foreground sm:justify-start sm:text-lg">
              <MapPin className="mr-2 size-5" />
              {locationName}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 p-4 sm:grid-cols-2 sm:gap-6 sm:p-6">
        <div className="space-y-4 sm:col-span-2 sm:space-y-6">
          {aboutInfo && (
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                {matchesT('about')}
              </h3>
              <p className="text-muted-foreground">{aboutInfo}</p>
            </div>
          )}
          {hasIdea === 'true' && ideaDescription && (
            <div>
              <h3 className="mb-2 text-xl font-semibold">{matchesT('idea')}</h3>
              <p className="text-muted-foreground">{ideaDescription}</p>
            </div>
          )}
        </div>
        {services.length > 0 && (
          <div>
            <h3 className="mb-2 text-xl font-semibold">
              {matchesT('expertise')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <Badge
                  variant="primary-border"
                  key={service}
                  className="px-2 py-1 text-base"
                >
                  {t(`serviceOptions.${service}`)}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {searchRoles.length > 0 && (
          <div>
            <h3 className="mb-2 text-xl font-semibold">
              {matchesT('lookingFor')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {searchRoles.map((searchRole) => (
                <Badge
                  variant="primary-border"
                  key={role}
                  className="px-2 py-1 text-base"
                >
                  {searchRole}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {languagesNames.length > 0 && (
          <div>
            <h3 className="mb-2 text-xl font-semibold">
              {matchesT('languages')}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">{languagesNames}</span>
            </div>
          </div>
        )}
        {availabilityTime && (
          <div>
            <h3 className="mb-2 text-xl font-semibold">
              {matchesT('availability')}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">
                {profileT(availabilityTime)}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export { ProfileCard };
