import { useTranslations } from 'next-intl';

import { RoleField } from '@/components/role-field';
import { SubRolesField } from '@/components/sub-roles-field';
import ToggleGroupField from '@/components/toggle-group-field';
import { TypographyH3 } from '@/components/ui/typography';
import { useRoleFormFields } from '@/hooks/use-role-form-fields';

const Role = () => {
  const t = useTranslations('profileForm');

  const {
    roleOptions,
    subRolesOptions,
    servicesOptions,
    isSubrolesFieldVisible,
    isServicesFieldVisible,
  } = useRoleFormFields();

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <TypographyH3>{t(`stepTitles.roles`)}</TypographyH3>

      <div className="flex w-full flex-col items-center gap-4">
        <RoleField
          className="w-full"
          isRequired
          label={t('roleLabel')}
          options={roleOptions}
        />

        {isSubrolesFieldVisible && (
          <SubRolesField
            className="w-full"
            maxSelectable={2}
            label={t('subRolesLabel')}
            options={subRolesOptions}
          />
        )}

        {isServicesFieldVisible && (
          <ToggleGroupField
            className="mt-4"
            maxSelectable={4}
            name="services"
            label={t('servicesLabel')}
            options={servicesOptions}
            type="multiple"
          />
        )}
      </div>
    </div>
  );
};

export { Role };
