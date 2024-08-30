import { useTranslations } from 'next-intl';

import { RoleField } from '@/components/role-field';
import { SubRolesField } from '@/components/sub-roles-field';
import ToggleGroupField from '@/components/toggle-group-field';
import { useRoleFormFields } from '@/hooks/use-role-form-fields';

const FormFields = () => {
  const t = useTranslations('profileForm');

  const {
    roleOptions,
    subRolesOptions,
    servicesOptions,
    isSubrolesFieldVisible,
    isServicesFieldVisible,
  } = useRoleFormFields();

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <RoleField
        className="w-full"
        label={t('searchRoleLabel')}
        options={roleOptions}
      />

      {isSubrolesFieldVisible && (
        <SubRolesField
          className="w-full"
          label={t('searchSubrolesLabel')}
          options={subRolesOptions}
          maxSelectable={2}
        />
      )}

      {isServicesFieldVisible && (
        <ToggleGroupField
          className="mt-4"
          maxSelectable={4}
          name="services"
          options={servicesOptions}
          type="multiple"
        />
      )}
    </div>
  );
};

export { FormFields };
