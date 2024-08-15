import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { Spinner } from '@/components/ui/spinner';

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
      className="w-full gap-2"
      variant="outline"
      disabled={disabled ?? isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <Spinner className="size-5" />
      ) : (
        <Icons.Google className="size-5" />
      )}
      {t('continue_with_google')}
    </Button>
  );
};

export { GoogleButton };
