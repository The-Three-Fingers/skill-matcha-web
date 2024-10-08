import { useMutation } from '@tanstack/react-query';

const mutationFn = async (favoriteId: string) => {
  const res = await fetch(`/api/favorites/${favoriteId}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    const body = await res.json();

    throw new Error(body.error);
  }
};

export const useDeleteFavorite = () => {
  return useMutation({
    mutationFn,
  });
};
