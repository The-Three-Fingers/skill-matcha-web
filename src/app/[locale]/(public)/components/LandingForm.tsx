import { zodResolver } from '@hookform/resolvers/zod';
import { Form, useForm } from 'react-hook-form';
import { isValid, z } from 'zod';

import { Button } from '@/components/ui/button';
import { TypographyH3, TypographyP } from '@/components/ui/typography';

const defaultValues = {
  email: '',
};

const schema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
});

type FormData = z.infer<typeof schema>;

export default function LandingForm() {
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
    formState: { isSubmitting, isSubmitSuccessful },
  } = form;

  const onSubmit = async (data: FormData) => {
    console.log('data', data);

    // await mutateAsync(data);

    reset();
  };

  if (isSubmitSuccessful) {
    return (
      <>
        <TypographyH3>Thank you!</TypographyH3>
        <TypographyP>We will reach out to you shortly. 🚀</TypographyP>
      </>
    );
  }

  return (
    <Form {...form}>
      <TypographyH3>Get Early Access</TypographyH3>
      <TypographyP>
        Sign up to stay in the loop and be among the first to experience our
        platform when it launches
      </TypographyP>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          {/* <input
            type="email"
            placeholder="Your Email"
            {...register('email')}
            className="w-full rounded-md border border-gray-300 p-3 text-base focus:border-primary focus:outline-none"
          />
          {errors.email && (
            <TypographyP className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </TypographyP>
          )} */}
        </div>
        {/* <InputField name={name} label="lalal" placeholder="asldkfj" /> */}
        <Button
          type="submit"
          disabled={isSubmitting || !isValid}
          // className="hover:bg-primary-dark w-full rounded-md bg-primary p-3 text-white transition"
        >
          {isSubmitting ? 'Submitting...' : 'Get Early Access'}
        </Button>
      </form>
    </Form>
  );
}
