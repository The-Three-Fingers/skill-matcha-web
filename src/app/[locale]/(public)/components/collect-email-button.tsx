'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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

const defaultValues = {
  email: '',
};

const schema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .min(1, { message: 'Email is required' }),
});

type FormData = z.infer<typeof schema>;

const CollectEmailButton = ({
  children,
  className,
  size,
}: {
  children: React.ReactNode;
  className?: string;
  size?: ButtonProps['size'];
}) => {
  // !!TODO создать useSendLead
  // const { mutateAsync } = useSendLead();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting, isSubmitSuccessful },
  // } = useForm<FormData>({
  //   resolver: zodResolver(schema),
  // });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting, isSubmitSuccessful },
  } = form;

  const onSubmit = async (data: FormData) => {
    console.log('data', data);

    // await mutateAsync(data);

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
              <DialogTitle>Get Early Access</DialogTitle>
              {!isSubmitSuccessful && (
                <DialogDescription>
                  Send request to stay in the loop and be among the first to
                  experience our platform when it launches
                </DialogDescription>
              )}
            </DialogHeader>
            {!isSubmitSuccessful ? (
              <InputField name="email" placeholder="Email" />
            ) : (
              <>
                <TypographyH3>Thank you!</TypographyH3>
                <TypographyP>We will reach out to you shortly 🚀</TypographyP>
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
