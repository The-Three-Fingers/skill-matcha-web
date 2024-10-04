import { useMutation, useQueryClient, type UseMutationResult } from '@tanstack/react-query';
import type { z } from 'zod';

import type { ProfileValidation } from '@/validations/profile-validation';

type Favorite = z.infer<typeof ProfileValidation> & {
  id: string;
};

const deleteFavorite = async (id: string): Promise<void> => {
  const response = await fetch(`/api/favorites/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to remove favorite');
  }
};

export const useDeleteFavorite = (): UseMutationResult<void, Error, string> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFavorite,

    onMutate: async (removedId: string) => {
      await queryClient.cancelQueries({ queryKey: ['favorites'] });

      queryClient.setQueryData<Favorite[]>(
        ['favorites'],
        (oldFavorites) =>
          oldFavorites?.filter((favorite) => favorite.id !== removedId) || [],
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });
};