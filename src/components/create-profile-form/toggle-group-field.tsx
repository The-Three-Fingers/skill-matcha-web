'use client';

import { useFormContext } from 'react-hook-form';

import { FormField, FormItem } from '@/components/ui/form';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const ToggleGroupField = ({
  name,
  options,
}: {
  name: string;
  options: Record<string, string>;
}) => {
  const { control } = useFormContext();
  const optionKeys = Object.keys(options);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <ToggleGroup
            type="single"
            value={field.value}
            onValueChange={(value) => field.onChange(value)}
          >
            {optionKeys.map((optionKey) => (
              <ToggleGroupItem
                key={optionKey}
                value={optionKey}
                aria-label={options[optionKey]}
              >
                {options[optionKey]}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </FormItem>
      )}
    />
  );
};

export default ToggleGroupField;
