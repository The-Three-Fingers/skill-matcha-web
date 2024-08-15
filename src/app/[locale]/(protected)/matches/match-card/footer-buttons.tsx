import { Heart, Pencil } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Button } from '@/components/ui/button';

type FooterButtonType = 'contact' | 'save';

type FooterButtonsProps = {
  onClick: (buttonType: FooterButtonType) => void;
};

const FooterButtons: React.FC<FooterButtonsProps> = ({ onClick }) => {
  const handleClick = (type: FooterButtonType) => () => {
    onClick(type);
  };

  const t = useTranslations('MatchesProfiles');

  return (
    <div className="fixed bottom-0 left-0 flex h-16 w-full items-center justify-center gap-4 bg-white shadow-soft-outline">
      <Button
        className="w-56 gap-2 rounded-3xl"
        onClick={handleClick('contact')}
      >
        <Pencil className="size-4" />
        {t('contact_button')}
      </Button>

      <Button className="w-56 gap-2 rounded-3xl" onClick={handleClick('save')}>
        <Heart className="size-4" />
        {t('save_button')}
      </Button>
    </div>
  );
};

export default FooterButtons;
