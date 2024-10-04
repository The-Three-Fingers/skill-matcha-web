import { X } from 'lucide-react';
import type { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { ProfileValidation } from '@/validations/profile-validation';

import { FavoriteCardContent } from './favorite-card-content';
import { FavoriteCardFooter } from './favorite-card-footer';
import { FavoriteCardHeader } from './favorite-card-header';
import { FavoriteCardSkills } from './favorite-card-skills';

type FavoriteAccount = z.infer<typeof ProfileValidation> & {
  id: string;
};

type FavoriteCardProps = {
  account: FavoriteAccount;
  onDelete: (id: string) => void;
};

const FavoriteCard = ({ account, onDelete }: FavoriteCardProps) => (
  <Card className="relative flex flex-col overflow-hidden">
    <Button
      variant="ghost"
      size="icon"
      className="absolute right-2 top-2 text-muted-foreground hover:text-destructive"
      onClick={() => onDelete(account.id)}
    >
      <X size={20} />
    </Button>

    <FavoriteCardHeader
      name={account.name}
      lastName={account.lastName}
      avatarURL={account.avatarURL}
      role={account.role}
    />

    <FavoriteCardContent
      location={account.location}
      languages={account.languages}
      availabilityTime={account.availabilityTime}
      hasIdea={account.hasIdea}
      ideaStage={account.ideaStage || ''}
      aboutInfo={account.aboutInfo}
    />

    <FavoriteCardSkills
      subRoles={account.subRoles}
      services={account.services}
    />

    <FavoriteCardFooter />
  </Card>
);

export { FavoriteCard };
