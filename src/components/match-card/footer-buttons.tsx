import { useTranslations } from 'next-intl';
import React from 'react';

import { Button } from '../ui/button';
import { Icons } from '../ui/icons';

type ButtonDirection = 'contact' | 'save';

type FooterButtonsProps = {
  onClick: (buttonType: ButtonDirection) => void;
};

const FooterButtons: React.FC<FooterButtonsProps> = ({ onClick }) => {
  const handleClick = (type: ButtonDirection) => () => {
    onClick(type);
  };

  const t = useTranslations('matchesProfiles');

  return (
    <div className="fixed bottom-0 left-0 flex h-16 w-full items-center justify-center gap-4 bg-white shadow-soft-outline">
      <Button
        className="w-56 gap-2 rounded-3xl"
        onClick={handleClick('contact')}
      >
        <div className="flex size-4 items-center justify-center">
          <Icons.PencilIcon className="size-full" />
        </div>
        {t('contact_button')}
      </Button>

      <Button className="w-56 gap-2 rounded-3xl" onClick={handleClick('save')}>
        <div className="flex size-4 items-center justify-center">
          <Icons.HeartIcon className="size-full" />
        </div>
        {t('save_button')}
      </Button>
    </div>
  );
};

export default FooterButtons;
