import { CircleUserRound } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const AvatarUploadField = ({
  file,
  setFile,
}: {
  file: string | undefined;
  setFile: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const t = useTranslations('profile');

  const acceptablesFiles = 'image/*, application/pdf';

  const handleAddAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imgFile = event.target.files?.[0] || null;

    if (imgFile) {
      setFile(URL.createObjectURL(imgFile));
    }
  };

  return (
    <div className="flex justify-between">
      <FormField
        name="avatarURL"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('avatar')}</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept={acceptablesFiles}
                {...field}
                onChange={handleAddAvatar}
                value=""
              />
            </FormControl>
            <FormDescription>{t('avatarDescription')}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      {file ? (
        <Image
          width={100}
          height={100}
          src={file}
          alt="avatar preview"
          className="mt-2 size-24 rounded-full object-cover"
        />
      ) : (
        <CircleUserRound width={100} height={100} />
      )}
    </div>
  );
};

export { AvatarUploadField };
