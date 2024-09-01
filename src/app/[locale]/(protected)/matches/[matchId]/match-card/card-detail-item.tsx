import { CardDescription } from '@/components/ui/card';

type CardDetailItemProps = {
  label: string;
  value: string | string[];
};

const CardDetailItem = ({ label, value }: CardDetailItemProps) => {
  return (
    <CardDescription className="rounded-md bg-accent p-3 dark:bg-accent-foreground">
      {label}: {value}
    </CardDescription>
  );
};

export default CardDetailItem;
