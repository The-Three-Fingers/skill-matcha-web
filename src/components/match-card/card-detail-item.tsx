import { CardDescription } from '../ui/card';

type CardDetailItemProps = {
  label: string;
  value: string | string[];
};

const CardDetailItem = ({ label, value }: CardDetailItemProps) => {
  return (
    <CardDescription className="rounded-md bg-zinc-100 p-3">
      {label}: {value}
    </CardDescription>
  );
};

export default CardDetailItem;
