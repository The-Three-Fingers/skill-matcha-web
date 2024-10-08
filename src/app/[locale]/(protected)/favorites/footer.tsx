import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';

const Footer = () => {
  const t = useTranslations('favorites');

  return (
    <CardFooter>
      <Button className="w-full">{t('connect')}</Button>
    </CardFooter>
  );
};

export { Footer };
