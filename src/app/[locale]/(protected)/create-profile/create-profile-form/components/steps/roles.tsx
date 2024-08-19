import { useTranslations } from 'next-intl';

import ToggleGroupField from '@/components/ui/toggle-group-field';
import { useRoles } from '@/hooks/queries/use-roles';

const Roles = () => {
  const t = useTranslations('createProfileForm');

  const { data: roles } = useRoles();

  const rolesList = roles?.map((role) => role.id) ?? [];

  const roleOptions = rolesList.reduce(
    (acc, roleId) => {
      const option = {
        label: t(`roleOptions.${roleId}`),
        value: roleId,
      };

      acc.push(option);

      return acc;
    },
    [] as { label: string; value: string }[],
  );

  return <ToggleGroupField name="roles" options={roleOptions} />;
};

export { Roles };
