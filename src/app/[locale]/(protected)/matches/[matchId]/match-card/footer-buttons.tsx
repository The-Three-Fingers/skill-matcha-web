import { Pencil } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

const FooterButtons = () => {
  const t = useTranslations('matches');

  return (
    <div className="fixed bottom-0 left-0 z-50 flex h-[70px] w-full items-center justify-center gap-4 bg-white p-3 dark:border-t dark:bg-background">
      {/* <div className="mx-auto flex w-full max-w-lg items-center gap-2"> */}
      <Button className="w-60 gap-2">
        <Pencil className="size-4" />
        {t('contact_button')}
      </Button>

      {/* <Button className="flex-1 gap-2">
          <Heart className="size-4" />
          {t('save_button')}
        </Button> */}
      {/* </div> */}
    </div>
  );
};

export { FooterButtons };
