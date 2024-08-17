import { type QueryFunction, useQuery } from '@tanstack/react-query';

const fetchCountries: QueryFunction<
  {
    name: string;
    code: string;
    flag: string;
  }[]
> = async () => {
  const response = await fetch('/api/countries');

  return response.json();
};

export const useCountries = () => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
    staleTime: Infinity,
  });
};
