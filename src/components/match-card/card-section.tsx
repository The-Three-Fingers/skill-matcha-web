import { CardSubtitle, CardDescription } from '../ui/card';

type CardSectionProps = {
  title: string;
  content: string;
};

const CardSection = ({ title, content }: CardSectionProps) => {
  return (
    <div className="flex flex-col">
      <CardSubtitle className="rounded-t-sm bg-neutral-400 px-4 py-2">
        {title}
      </CardSubtitle>
      <div className="rounded-b-sm bg-white p-6">
        <CardDescription>{content}</CardDescription>
      </div>
    </div>
  );
};

export default CardSection;
