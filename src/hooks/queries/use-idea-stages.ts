import { type QueryFunction, useQuery } from '@tanstack/react-query';

const fetchIdeaStages: QueryFunction<
  {
    name: string;
    id: string;
  }[]
> = async () => {
  const response = await fetch('/api/idea-stages');

  return response.json();
};

export const useIdeaStages = () => {
  return useQuery({
    queryKey: ['ideaStages'],
    queryFn: fetchIdeaStages,
    staleTime: Infinity,
  });
};
