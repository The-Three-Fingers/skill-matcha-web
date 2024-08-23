'use client';

import { ChevronsUpDown, X } from 'lucide-react';
import React from 'react';
import { type MouseEventHandler, useState } from 'react';

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

const Combobox = React.forwardRef<
  HTMLButtonElement,
  {
    className?: string;
    components?: {
      Option?: React.ElementType;
      SelectedValue?: React.ElementType;
    };
    isClearable?: boolean;
    onChange?: (value: string) => void;
    options: Record<string, any>[];
    placeholder?: string;
    searchPlaceholder?: string;
    value?: string;
    width?: number;
  }
>(
  (
    {
      className,
      components,
      isClearable,
      onChange,
      options,
      placeholder = 'Select ...',
      searchPlaceholder = 'Search ...',
      value,
      width,
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [currentvalue, setCurrentValue] = useState(value);

    const handleChange = (newValue: string) => {
      setCurrentValue(newValue === currentvalue ? '' : newValue);
      onChange?.(newValue);

      setOpen(false);
    };

    const handleClear: MouseEventHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();

      setCurrentValue('');

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
          <Button
            ref={ref}
            variant="ring"
            role="combobox"
            aria-expanded={open}
            style={{
              width: width ?? 350,
            }}
            className={cn(
              'justify-between',
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
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0"
          style={{
            width: width ?? 350,
          }}
        >
          <Command>
            {/* Fix bug with search */}
            <CommandInput placeholder={searchPlaceholder} />
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
