import { Pencil, Trash2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { RoleId, SubRoleId } from '@/hooks/queries/use-roles';

import { SearchPreferenceDialog } from './search-preference-dialog';
import type { PreferenceFields } from './types';

const SearchPreferenceCard = ({
  searchPreference,
  onDelete,
  onUpdate,
  index,
}: {
  index: number;
  onDelete: (index: number) => void;
  onUpdate: (index: number, data: PreferenceFields) => void;
  searchPreference: PreferenceFields;
}) => {
  const t = useTranslations('profileForm');

  return (
    <Card className="transition-all hover:border-primary">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-center">
            {t(`roleOptions.${searchPreference.role as RoleId}`)}
          </CardTitle>
          <div className="flex items-center gap-1">
            <SearchPreferenceDialog
              index={index}
              onSubmit={(data: PreferenceFields) => onUpdate(index, data)}
              searchPreference={searchPreference}
            >
              <Button
                variant="link"
                className="size-6 p-1 text-foreground hover:text-primary"
              >
                <Pencil className="size-4" />
              </Button>
            </SearchPreferenceDialog>
            <Button
              variant="link"
              onClick={() => onDelete(index)}
              className="size-6 p-1 text-foreground hover:text-destructive"
            >
              <Trash2 className="size-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      {searchPreference.subRoles.length > 0 && (
        <CardContent className="flex flex-wrap gap-1.5">
          {searchPreference.subRoles.map((subRole) => (
            <Badge variant="primary-border" key={subRole}>
              {t(`subRoleOptions.${subRole as SubRoleId}`)}
            </Badge>
          ))}
        </CardContent>
      )}
      {searchPreference.services.length > 0 && (
        <CardFooter className="flex flex-wrap gap-1.5">
          {searchPreference.services.map((service) => (
            <Badge key={service} className="h-8 rounded-sm">
              {t(`serviceOptions.${service}` as any)}
            </Badge>
          ))}
        </CardFooter>
      )}
    </Card>
  );
};

export { SearchPreferenceCard };
