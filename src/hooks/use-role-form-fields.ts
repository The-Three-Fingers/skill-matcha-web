import { useTranslations } from 'next-intl';
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import type { z } from 'zod';

import type { Role } from '@/validations/profile-validation';

import { type SubRoleId, useRoles } from './queries/use-roles';
import useIsFirstRender from './use-is-first-render';

export type RoleFormFields = z.infer<typeof Role>;

const useRoleFormFields = () => {
  const t = useTranslations('profileForm');

  const { watch, setValue } = useFormContext<RoleFormFields>();

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

  const roleValue = watch('role') as (typeof rolesList)[0];
  const subRolesValue = watch('subRoles') as SubRoleId[];
  const servicesValue = watch('services') as string[];

  const subRoles = roles?.find((role) => role.id === roleValue)?.subRoles;

  const subRolesList =
    roleValue && subRoles ? (Object.keys(subRoles) as SubRoleId[]) : [];

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
    if (!roleValue) return [];

    const allServices = [] as string[];

    const roleServices = roles?.find((role) => role.id === roleValue)?.services;

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
  }, [roles, subRoles, roleValue, subRolesValue]);

  const isFirstRender = useIsFirstRender();

  useEffect(() => {
    if (isFirstRender) return;

    setValue('subRoles', []);
    setValue('services', []);
  }, [setValue, roleValue]);

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

  return {
    roleOptions,
    subRolesOptions,
    servicesOptions,
    isSubrolesFieldVisible,
    isServicesFieldVisible,
  };
};

export { useRoleFormFields };
