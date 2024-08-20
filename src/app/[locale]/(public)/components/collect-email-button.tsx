'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { Button, type ButtonProps } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import InputField from '@/components/ui/input-field';
import { TypographyH3, TypographyP } from '@/components/ui/typography';

import { useSendLead } from './hooks/use-send-lead';
import { sendLeadForm } from './validation';

const defaultValues = {
  email: '',
};

type FormData = z.infer<typeof sendLeadForm>;

const CollectEmailButton = ({
  children,
  className,
  size,
}: {
  children: React.ReactNode;
  className?: string;
  size?: ButtonProps['size'];
}) => {
  const { mutateAsync } = useSendLead();
  const t = useTranslations('landing');

  const form = useForm({
    resolver: zodResolver(sendLeadForm),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting, isSubmitSuccessful },
  } = form;

  const onSubmit = async (data: FormData) => {
    await mutateAsync(data);

    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={size} className={className}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-4"
          >
            <DialogHeader>
              <DialogTitle>{t('dialogTitle')}</DialogTitle>
              {!isSubmitSuccessful && (
                <DialogDescription>{t('dialogDescription')}</DialogDescription>
              )}
            </DialogHeader>
            {!isSubmitSuccessful ? (
              <InputField name="email" placeholder="Email" />
            ) : (
              <>
                <TypographyH3>{t('dialogSuccessTitle')}</TypographyH3>
                <TypographyP>{t('dialogSuccessDescription')}</TypographyP>
              </>
            )}
            {!isSubmitSuccessful && (
              <DialogFooter>
                <Button type="submit" disabled={isSubmitting || !isValid}>
                  {isSubmitting ? 'Submitting...' : 'Send Request'}
                </Button>
              </DialogFooter>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export { CollectEmailButton };
