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

const fetchRoles: QueryFunction<{ id: RoleId }[]> = async () => {
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
