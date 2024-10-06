import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui/badge';
import { CardContent } from '@/components/ui/card';

type SkillsBlockProps = {
  subRoles: string[];
  services: string[];
};

const SkillsBlock = ({ subRoles, services }: SkillsBlockProps) => {
  const t = useTranslations('favorites');

  return (
    <CardContent className="grow pt-4">
      <h4 className="mb-2 text-sm font-semibold">{t('expertise')}</h4>
      <div className="mb-2 flex flex-wrap gap-1">
        {subRoles.map((subRole) => (
          <Badge key={subRole} variant="secondary" className="text-xs">
            {subRole}
          </Badge>
        ))}
      </div>
      <h4 className="mb-2 text-sm font-semibold">{t('services')}</h4>
      <div className="flex flex-wrap gap-1">
        {services.map((service) => (
          <Badge key={service} variant="outline" className="text-xs">
            {service}
          </Badge>
        ))}
      </div>
    </CardContent>
  );
};

export { SkillsBlock };
