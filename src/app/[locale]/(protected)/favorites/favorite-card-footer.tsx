import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

const FavoriteCardFooter = () => {
  const t = useTranslations('favorites');

  return (
      <CardFooter>
        <Button className="w-full">{t('connect')}</Button>
      </CardFooter>
  );
}

export { FavoriteCardFooter };
