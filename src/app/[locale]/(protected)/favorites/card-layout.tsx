import { X } from 'lucide-react';
import type { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { ProfileValidation } from '@/validations/profile-validation';

import { ContentBlock } from './content-block';
import { FooterBlock } from './footer-block';
import { HeaderBlock } from './header-block';
import { SkillsBlock } from './skills-block';

type FavoriteAccount = z.infer<typeof ProfileValidation> & {
  id: string;
};

type CardLayoutProps = {
  account: FavoriteAccount;
  onDelete: (id: string) => void;
};

const CardLayout = ({ account, onDelete }: CardLayoutProps) => (
  <Card className="relative flex flex-col overflow-hidden">
    <Button
      variant="ghost"
      size="icon"
      className="absolute right-2 top-2 text-muted-foreground hover:text-destructive"
      onClick={() => onDelete(account.id)}
    >
      <X size={20} />
    </Button>

    <HeaderBlock
      name={account.name}
      lastName={account.lastName}
      avatarURL={account.avatarURL}
      role={account.role}
    />

    <ContentBlock
      location={account.location}
      languages={account.languages}
      availabilityTime={account.availabilityTime}
      hasIdea={account.hasIdea}
      ideaStage={account.ideaStage || ''}
      aboutInfo={account.aboutInfo}
    />

    <SkillsBlock subRoles={account.subRoles} services={account.services} />

    <FooterBlock />
  </Card>
);

export { CardLayout };
