import { type QueryFunction, useQuery } from '@tanstack/react-query';

const fetchLanguages: QueryFunction<
  { name: string; code: string }[]
> = async () => {
  const response = await fetch('/api/languages');
  return response.json();
};

export const useLanguages = () => {
  return useQuery({
    queryKey: ['languages'],
    queryFn: fetchLanguages,
    staleTime: Infinity,
  });
};
