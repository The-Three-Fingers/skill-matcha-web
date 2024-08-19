import { Button } from '@/components/ui/button';
import { TypographyH2, TypographyH4 } from '@/components/ui/typography';

interface HeroProps {
  onSignUp: () => void;
}

export default function HeroSection({ onSignUp }: HeroProps) {
  return (
    <section className="flex w-full flex-col items-start justify-start gap-10 sm:w-full md:gap-16 xl:mx-auto">
      <TypographyH2 className="border-none leading-10 sm:text-5xl xl:text-6xl">
        Find Your <br />
        Perfect Startup Partner <br />
        with AI
      </TypographyH2>

      <TypographyH4 className="xl:text-2xl">
        Let AI match your ideas with the right talent for your startup. <br />
        Effortlessly find, select, and team up to build your unicorn.
      </TypographyH4>
      <Button
        size="lg"
        className="w-1/3 xl:w-1/5 xl:text-xl"
        onClick={onSignUp}
      >
        Get started
      </Button>
    </section>
  );
}
