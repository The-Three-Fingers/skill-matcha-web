import { TypographyH1 } from '@/components/ui/typography';
import { AppConfig } from '@/utils/AppConfig';

export default function Header() {
  return (
    <header className="mb-10 flex h-8 w-full items-center justify-between px-4 sm:mb-20 sm:h-12 sm:px-6 xl:mb-32 xl:h-16 xl:px-8">
      <div className="flex items-center justify-start gap-4 sm:gap-6 xl:gap-8">
        <TypographyH1 className="text-lime-600/70">
          {AppConfig.name}
        </TypographyH1>
      </div>
    </header>
  );
}
