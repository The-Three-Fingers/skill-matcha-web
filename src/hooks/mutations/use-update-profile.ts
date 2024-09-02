import { useMutation } from '@tanstack/react-query';

const mutationFn = async (data: FormData) => {
  const res = await fetch(`/api/profiles`, {
    method: 'PATCH',
    body: data,
  });

  if (!res.ok) {
    const body = await res.json();

    throw new Error(body.error);
  }
};

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn,
  });
};
