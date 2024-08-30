import { useRedirectParam } from './useRedirectParam';

export function useRedirectAfterLogin() {
  const redirect = useRedirectParam();

  return () => {
    window.location.href = redirect ?? '/dashboard';
  };
}
