import { useTranslations } from 'next-intl';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TypographySmall } from '@/components/ui/typography';

interface ProfileEmailSectionProps {
  onUnlinkClick: () => void;
}

const ProfileEmailSection: React.FC<ProfileEmailSectionProps> = ({
  onUnlinkClick,
}) => {
  const mockEmail = 'emailFromBackend@gmail.com';
  const t = useTranslations('profile');

  return (
    <div className="flex gap-16">
      <div className="flex flex-1 flex-col gap-3">
        <TypographySmall>{t('emailDescription')}</TypographySmall>
        <Input value={mockEmail} disabled className="mt-auto" />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <TypographySmall>{t('unlinkEmailDescription')}</TypographySmall>
        <Button
          type="button"
          className="mt-auto"
          variant="destructive"
          onClick={onUnlinkClick}
        >
          {t('unlinkEmail')}
        </Button>
      </div>
    </div>
  );
};

export default ProfileEmailSection;
