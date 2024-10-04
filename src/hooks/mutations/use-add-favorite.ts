import { useMutation } from '@tanstack/react-query';

export const addFavorite = async (id: string): Promise<void> => {
  const response = await fetch(`/api/favorites/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to add favorite');
  }
};

export const useAddFavorite = () => {
  return useMutation({
    mutationFn: addFavorite,
  });
};