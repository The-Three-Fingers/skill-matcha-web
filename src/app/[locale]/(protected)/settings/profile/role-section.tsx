import { useTranslations } from 'next-intl';
import React from 'react';

import { RoleField } from '@/components/role-field';
import { SubRolesField } from '@/components/sub-roles-field';
import ToggleGroupField from '@/components/toggle-group-field';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useRoleFormFields } from '@/hooks/use-role-form-fields';

const RoleSection = () => {
  const t = useTranslations('profile.rolesSection');

  const {
    roleOptions,
    subRolesOptions,
    servicesOptions,
    isSubrolesFieldVisible,
    isServicesFieldVisible,
  } = useRoleFormFields();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('rolesSectionTitle')}</CardTitle>
        <CardDescription>{t('rolesSectionDescription')}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
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
            isRequired
            className="mt-4"
            maxSelectable={4}
            name="services"
            label={t('servicesLabel')}
            options={servicesOptions}
            type="multiple"
          />
        )}
      </CardContent>
    </Card>
  );
};

export default RoleSection;
