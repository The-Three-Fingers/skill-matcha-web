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
  options: { label: string; value: string }[];
}) => {
  const { control } = useFormContext();

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
            {options.map((option) => (
              <ToggleGroupItem
                key={option.value}
                value={option.value}
                aria-label={option.label}
              >
                {option.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </FormItem>
      )}
    />
  );
};

export default ToggleGroupField;
