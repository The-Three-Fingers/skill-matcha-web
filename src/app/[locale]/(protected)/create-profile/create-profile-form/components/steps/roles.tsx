import { useTranslations } from 'next-intl';
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { RolesField } from '@/components/roles-field';
import { SubRolesField } from '@/components/sub-roles-field';
import ToggleGroupField from '@/components/toggle-group-field';
import { TypographyH3 } from '@/components/ui/typography';
import type { SubRoleId } from '@/hooks/queries/use-roles';
import { useRoles } from '@/hooks/queries/use-roles';
import useIsFirstRender from '@/hooks/use-is-first-render';

import type { ProfileFormFields } from '../../types';

const Roles = () => {
  const t = useTranslations('profileForm');

  const { watch, setValue } = useFormContext<ProfileFormFields>();

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

  const rolesValue = watch('roles') as (typeof rolesList)[0];
  const subRolesValue = watch('subRoles') as SubRoleId[];
  const servicesValue = watch('services') as string[];

  const subRoles = roles?.find((role) => role.id === rolesValue)?.subRoles;

  const subRolesList =
    rolesValue && subRoles ? (Object.keys(subRoles) as SubRoleId[]) : [];

  const subRolesOptions = subRolesList.reduce(
    (acc, subRole) => {
      const option = {
        label: t(`subRoleOptions.${subRole}`),
        value: subRole,
      };

      acc.push(option);

      return acc;
    },
    [] as { label: string; value: string }[],
  );

  const services = useMemo(() => {
    if (!rolesValue) return [];

    const allServices = [] as string[];

    const roleServices = roles?.find(
      (role) => role.id === rolesValue,
    )?.services;

    if (subRoles && subRolesValue.length > 0) {
      subRolesValue.forEach((subRole) => {
        const subRoleServices = subRoles[subRole] ?? [];

        allServices.push(...subRoleServices);
      }, [] as string[]);
    }

    if (roleServices) {
      allServices.push(...roleServices);
    }

    return [...new Set(allServices)];
  }, [roles, subRoles, rolesValue, subRolesValue]);

  const isFirstRender = useIsFirstRender();

  useEffect(() => {
    if (isFirstRender) return;

    setValue('subRoles', []);
    setValue('services', []);
  }, [setValue, rolesValue]);

  useEffect(() => {
    const newServicesValue = servicesValue.filter((service) =>
      services.includes(service),
    );

    if (newServicesValue.length === servicesValue.length) return;

    setValue('services', newServicesValue);
  }, [setValue, servicesValue, services]);

  const servicesOptions = services.reduce(
    (acc, service) => {
      const option = {
        label: t(`serviceOptions.${service}` as any),
        value: service,
      };

      acc.push(option);

      return acc;
    },
    [] as { label: string; value: string }[],
  );

  const isSubrolesFieldVisible = subRolesList.length > 0;

  const isServicesFieldVisible =
    (isSubrolesFieldVisible && subRolesValue && subRolesValue.length > 0) ||
    services.length > 0;

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <TypographyH3 className="mb-4">{t(`stepTitles.roles`)}</TypographyH3>

      <div className="flex flex-col items-center gap-4">
        <RolesField options={roleOptions} />

        {isSubrolesFieldVisible && <SubRolesField options={subRolesOptions} />}

        {isServicesFieldVisible && (
          <ToggleGroupField
            label={t('servicesLabel')}
            name="services"
            options={servicesOptions}
            isMultiple
          />
        )}
      </div>
    </div>
  );
};

export { Roles };
