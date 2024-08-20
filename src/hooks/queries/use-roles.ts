import { type QueryFunction, useQuery } from '@tanstack/react-query';

type RoleId =
  | 'developer'
  | 'designer'
  | 'qa'
  | 'analyst'
  | 'productManager'
  | 'entrepreneur'
  | 'marketer'
  | 'contentCreator';

export type SubRoleId =
  | 'frontend'
  | 'backend'
  | 'fullStack'
  | 'mobileDeveloper'
  | 'gameDeveloper'
  | 'embeddedDeveloper'
  | 'uiUx'
  | 'graphic'
  | 'motion'
  | '3d'
  | 'dataAnalyst'
  | 'businessAnalyst'
  | 'financialAnalyst'
  | 'startupFounder'
  | 'investor'
  | 'businessConsultant'
  | 'copywriter'
  | 'mediaContent'
  | 'smmManager';

type SubRoles = Record<SubRoleId, string[]>;
type Services = string[];

const fetchRoles: QueryFunction<
  { id: RoleId; subRoles?: SubRoles; services: Services }[]
> = async () => {
  const response = await fetch('/api/roles');

  return response.json();
};

export const useRoles = () => {
  return useQuery({
    queryKey: ['roles'],
    queryFn: fetchRoles,
    staleTime: Infinity,
  });
};
