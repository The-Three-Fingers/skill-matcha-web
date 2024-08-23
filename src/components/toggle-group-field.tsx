'use client';

import { useFormContext } from 'react-hook-form';

import { FormField, FormItem, FormLabel } from '@/components/ui/form';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const ToggleGroupField = ({
  type = 'single',
  label,
  name,
  isRadioGroup = false,
  options,
}: {
  type?: 'single' | 'multiple';
  label?: string;
  name: string;
  isRadioGroup?: boolean;
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
            type={type}
            value={field.value}
            onValueChange={(value: any) => {
              if (isRadioGroup) {
                if (value) field.onChange(value);
              } else {
                field.onChange(value);
              }
            }}
          >
            {options.map((option) => (
              <ToggleGroupItem
                key={option.value}
                value={option.value}
                aria-label={option.label}
                className="min-w-20 max-w-60 justify-center"
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
