import { useQuery } from '@tanstack/react-query';

const fetchLanguages = async () => {
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
