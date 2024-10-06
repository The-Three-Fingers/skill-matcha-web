import { Clock, Globe, Lightbulb, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { CardContent } from '@/components/ui/card';

import type { FavoriteProfile } from './types';

const ContentBlock = ({ profile }: { profile: FavoriteProfile }) => {
  const t = useTranslations('favorites');

  const {
    location,
    languages,
    availabilityTime,
    hasIdea,
    ideaStage,
    aboutInfo,
  } = profile;

  return (
    <CardContent className="grow pt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-1 text-sm">
            <MapPin size={16} className="text-muted-foreground" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Globe size={16} className="text-muted-foreground" />
            <span className="truncate">{languages.join(', ')}</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Clock size={16} className="text-muted-foreground" />
            <span className="truncate">{availabilityTime}</span>
          </div>
          {hasIdea === 'true' && (
            <div className="flex items-center gap-1 text-sm">
              <Lightbulb size={16} className="text-muted-foreground" />
              <span className="truncate">
                {t('idea')}: {ideaStage || ''}
              </span>
            </div>
          )}
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">{t('about')}</h4>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {aboutInfo}
          </p>
        </div>
      </div>
    </CardContent>
  );
};

export { ContentBlock };
