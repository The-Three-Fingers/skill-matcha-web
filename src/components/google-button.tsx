import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

const GoogleButton = ({
  disabled,
  isLoading,
  onClick,
}: {
  disabled?: boolean;
  isLoading: boolean;
  onClick: () => void;
}) => {
  const t = useTranslations('Auth');

  return (
    <Button
      className="w-full"
      variant="outline"
      disabled={disabled ?? isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <Loader2 className="mr-2 size-5 animate-spin" />
      ) : (
        <Icons.Google className="mr-2 size-5" />
      )}
      {t('continue_with_google')}
    </Button>
  );
};

export { GoogleButton };
