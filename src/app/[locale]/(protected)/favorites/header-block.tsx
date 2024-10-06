import { Star } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CardHeader, CardTitle } from '@/components/ui/card';

type HeaderBlockProps = {
  name: string;
  lastName: string;
  avatarURL: string;
  role: string;
};

const HeaderBlock = ({ name, lastName, avatarURL, role }: HeaderBlockProps) => (
  <CardHeader className="pb-2">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="size-16">
          <AvatarImage src={avatarURL} alt={`${name} ${lastName}`} />
          <AvatarFallback>
            {name[0]}
            {lastName[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="flex items-center gap-2 text-xl">
            {name} {lastName}
            <Star className="text-yellow-400" size={18} />
          </CardTitle>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  </CardHeader>
);

export { HeaderBlock };
