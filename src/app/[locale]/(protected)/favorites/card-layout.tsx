import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { Content } from './content';
import { Footer } from './footer';
import { Header } from './header';
import { Skills } from './skills';
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

    <Header profile={profile} />

    <Content profile={profile} />

    <Skills profile={profile} />

    <Footer />
  </Card>
);

export { CardLayout };
