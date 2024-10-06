import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { ContentBlock } from './content-block';
import { FooterBlock } from './footer-block';
import { HeaderBlock } from './header-block';
import { SkillsBlock } from './skills-block';
import type { FavoriteProfile } from './types';

type CardLayoutProps = {
  profile: FavoriteProfile;
  onDelete: (id: string) => void;
};

const CardLayout = ({ profile, onDelete }: CardLayoutProps) => (
  <Card className="relative flex flex-col overflow-hidden">
    <Button
      variant="ghost"
      size="icon"
      className="absolute right-2 top-2 text-muted-foreground hover:text-destructive"
      onClick={() => onDelete(profile.id)}
    >
      <X size={20} />
    </Button>

    <HeaderBlock profile={profile} />

    <ContentBlock profile={profile} />

    <SkillsBlock profile={profile} />

    <FooterBlock />
  </Card>
);

export { CardLayout };
