'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/libs/utils';

const Combobox = ({
  className,
  components,
  onChange,
  options,
  placeholder = 'Select ...',
  searchPlaceholder = 'Search ...',
  value,
}: {
  className?: string;
  components?: {
    Option: React.ElementType;
  };
  onChange?: (value: string) => void;
  options: Record<string, any>[];
  placeholder: string;
  searchPlaceholder?: string;
  value?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [currentvalue, setCurrentValue] = useState(value);

  const handleChange = (newValue: string) => {
    setCurrentValue(newValue === currentvalue ? '' : newValue);
    onChange?.(newValue);

    setOpen(false);
  };

  const { Option } = components || {};

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn('w-52 justify-between', className)}
        >
          <span className="truncate">
            {value
              ? options.find((option) => option.value === value)?.label
              : placeholder}
          </span>
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52 p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>Nothing found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={handleChange}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === option.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {Option ? <Option option={option} /> : option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export { Combobox };
