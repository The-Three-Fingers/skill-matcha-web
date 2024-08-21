import { Plus, Trash2, UserRound } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useRef } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const AvatarUploadField = ({ name }: { name: string }) => {
  const { control, watch, setValue } = useFormContext();

  const labelRef = useRef<HTMLLabelElement | null>(null);

  const t = useTranslations('profile');

  const supportedFileFormats = 'image/png, image/jpeg, image/jpg';

  const getImageURL = (file: File | undefined) => {
    if (!file) return '';

    return URL.createObjectURL(file);
  };

  const selectedFile = watch(name);

  const imageURL = getImageURL(selectedFile);

  const handleUpdate = () => {
    if (selectedFile) {
      setValue(name, undefined, {
        shouldValidate: true, // trigger validation
        shouldTouch: true, // update touched fields form state
        shouldDirty: true, // update dirty and dirty fields form state
      });

      return;
    }

    labelRef.current?.click();
  };

  return (
    <div className="flex">
      <FormField
        control={control}
        name={name}
        render={({ field: { value: _value, onChange, ...fieldProps } }) => (
          <FormItem>
            <FormLabel ref={labelRef}>{t('avatar')}</FormLabel>
            <FormControl>
              <Input
                type="file"
                className="hidden"
                accept={supportedFileFormats}
                {...fieldProps}
                onChange={(event) =>
                  onChange(event.target.files && event.target.files[0])
                }
              />
            </FormControl>
            <div className="relative size-24">
              {imageURL ? (
                <Image
                  width={96}
                  height={96}
                  src={imageURL}
                  alt="avatar preview"
                  className="size-full rounded-full object-cover"
                />
              ) : (
                <div className="flex size-full items-center justify-center rounded-full border border-input bg-background text-muted-foreground">
                  <UserRound className="size-12" />
                </div>
              )}
              <button
                type="button"
                onClick={handleUpdate}
                className="absolute bottom-0 right-0 flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:scale-105"
              >
                {imageURL ? (
                  <Trash2 className="size-4" />
                ) : (
                  <Plus className="size-5" />
                )}
              </button>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export { AvatarUploadField };
