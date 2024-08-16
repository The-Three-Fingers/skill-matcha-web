'use client';

import { useFormContext } from 'react-hook-form';

import { FormField, FormItem } from '@/components/ui/form';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const ToggleGroupField = ({
  isMultiple = false,
  name,
  options,
}: {
  isMultiple?: boolean;
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
            type={isMultiple ? 'multiple' : 'single'}
            value={field.value}
            onValueChange={field.onChange}
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
