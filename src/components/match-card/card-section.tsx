import { CardDescription } from '@/components/ui/card';
import { TypographyH4 } from '@/components/ui/typography';

type CardSectionProps = {
  title: string;
  content: string;
};

const CardSection = ({ title, content }: CardSectionProps) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-t-sm bg-neutral-400 px-4 py-2">
        <TypographyH4>{title}</TypographyH4>
      </div>
      <div className="rounded-b-sm bg-white p-6">
        <CardDescription>{content}</CardDescription>
      </div>
    </div>
  );
};

export default CardSection;
