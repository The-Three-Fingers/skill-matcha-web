import { useFormContext } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

type MultiSelectFieldProps<T extends string | number | symbol> = {
  name: string;
  label: string;
  options: Record<T, string>;
};

const MultiChoiceField = <T extends string | number | symbol>({
  name,
  label,
  options,
}: MultiSelectFieldProps<T>) => {
  const { control } = useFormContext();

  const optionKeys = Object.keys(options) as T[];

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">{label}</FormLabel>
          </div>
          {optionKeys.map((optionKey) => (
            <FormField
              key={optionKey.toString()}
              control={control}
              name={name}
              render={({ field }) => {
                const isChecked = field.value?.includes(optionKey);
                return (
                  <FormItem
                    key={optionKey.toString()}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={isChecked}
                        onCheckedChange={(checked: boolean) => {
                          return checked
                            ? field.onChange([...field.value, optionKey])
                            : field.onChange(
                                field.value?.filter(
                                  (value: T) => value !== optionKey,
                                ),
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {options[optionKey]}
                    </FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { MultiChoiceField };
