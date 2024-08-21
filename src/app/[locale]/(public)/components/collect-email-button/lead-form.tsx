import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import InputField from '@/components/ui/input-field';
import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { useSendLead } from '@/hooks/mutations/use-send-lead';
import { SendLeadForm } from '@/validations/lead-email-form';

const defaultValues = {
  email: '',
};

type FormData = z.infer<typeof SendLeadForm>;

export const LeadForm = () => {
  const t = useTranslations('landing');

  const { mutateAsync: sendLead } = useSendLead();

  const form = useForm({
    resolver: zodResolver(SendLeadForm),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    setError,
    formState: { isValid, isSubmitting, isSubmitSuccessful },
  } = form;

  const onSubmit = async (data: FormData) => {
    try {
      await sendLead(data);

      reset();
    } catch (error: any) {
      setError('email', { message: error.message }, { shouldFocus: true });
    }
  };

  return (
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
  );
};
