'use client';

import { ChevronsUpDown, X } from 'lucide-react';
import React from 'react';
import { type MouseEventHandler, useState } from 'react';

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

const Combobox = React.forwardRef<
  HTMLDivElement,
  {
    className?: string;
    components?: {
      Option?: React.ElementType;
      SelectedValue?: React.ElementType;
    };
    isClearable?: boolean;
    isSearchable?: boolean;
    onChange?: (value: string) => void;
    options: Record<string, any>[];
    placeholder?: string;
    searchPlaceholder?: string;
    value?: string;
  }
>(
  (
    {
      className,
      components,
      isClearable,
      isSearchable = true,
      onChange,
      options,
      placeholder = 'Select ...',
      searchPlaceholder = 'Search ...',
      value,
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);

    const handleChange = (newValue: string) => {
      onChange?.(newValue);

      setOpen(false);
    };

    const handleClear: MouseEventHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();

      onChange?.('');
    };

    const { Option, SelectedValue } = components || {};

    const selectedOption = options.find((option) => option.value === value);

    const defaultSelectedValueRender = selectedOption ? (
      <span className="truncate">{selectedOption.label}</span>
    ) : null;

    const selectedValueRender =
      SelectedValue && selectedOption ? (
        <SelectedValue option={selectedOption} />
      ) : (
        defaultSelectedValueRender
      );

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            ref={ref}
            aria-expanded={open}
            className={cn(
              'flex items-center cursor-pointer justify-between whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background text-muted-foreground min-h-10 px-4 py-2',
              value ? 'text-foreground' : '',
              className,
            )}
          >
            {selectedValueRender ?? placeholder}
            <div className="flex items-center gap-2">
              {isClearable && value && (
                <X
                  onClick={handleClear}
                  className="size-4 shrink-0 opacity-50 hover:opacity-80"
                />
              )}
              <ChevronsUpDown className="size-4 shrink-0 opacity-50" />
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
          <Command>
            {/* Fix bug with search */}
            {isSearchable && <CommandInput placeholder={searchPlaceholder} />}
            <CommandList>
              <CommandEmpty>Nothing found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={handleChange}
                    className={cn({
                      'bg-primary text-primary-foreground data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground':
                        value === option.value,
                    })}
                  >
                    {Option ? <Option option={option} /> : option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);

Combobox.displayName = 'Combobox';

export { Combobox };
