'use client';

import { useFormContext } from 'react-hook-form';

import { FormField, FormItem, FormLabel } from '@/components/ui/form';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const ToggleGroupField = ({
  isMultiple = false,
  label,
  name,
  options,
}: {
  isMultiple?: boolean;
  label?: string;
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
          {label && (
            <FormLabel className="mb-4 flex justify-center">{label}</FormLabel>
          )}
          <ToggleGroup
            className="flex-wrap"
            type={isMultiple ? 'multiple' : 'single'}
            value={field.value}
            onValueChange={field.onChange}
          >
            {options.map((option) => (
              <ToggleGroupItem
                key={option.value}
                value={option.value}
                aria-label={option.label}
                className="min-w-0 max-w-60 justify-normal"
              >
                <span className="truncate">{option.label}</span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </FormItem>
      )}
    />
  );
};

export default ToggleGroupField;
