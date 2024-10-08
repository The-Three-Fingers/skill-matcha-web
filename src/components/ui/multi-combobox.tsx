'use client';

import { ChevronsUpDown, X } from 'lucide-react';
import React from 'react';
import { type MouseEventHandler, useState } from 'react';

import { Badge } from '@/components/ui/badge';
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

import { TypographySmall } from './typography';

type Option = Record<'value' | 'label', string>;

const MultiCombobox = React.forwardRef<
  HTMLDivElement,
  {
    className?: string;
    isClearable?: boolean;
    isSearchable?: boolean;
    onChange?: (value: string[]) => void;
    maxSelectable?: number;
    options: Option[];
    placeholder?: string;
    searchPlaceholder?: string;
    value?: string[];
  }
>(
  (
    {
      className,
      isClearable,
      isSearchable = true,
      onChange,
      maxSelectable,
      options,
      placeholder = 'Select ...',
      searchPlaceholder = 'Search ...',
      value,
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);

    const selected = options.filter((option) =>
      (value ?? []).includes(option.value),
    );

    const handleSelect = (option: Option) => {
      if (maxSelectable && selected.length >= maxSelectable) return;

      const newSelected = [...selected, option];

      onChange?.(newSelected.map((selectedOption) => selectedOption.value));
    };

    const handleUnselect = (option: Option) => {
      const newSelected = selected.filter(
        (selectedOption) => selectedOption.value !== option.value,
      );

      onChange?.(newSelected.map((selectedOption) => selectedOption.value));
    };

    const handleClear: MouseEventHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();

      onChange?.([]);
    };

    const selectables = options.filter(
      (option) =>
        !selected.find(
          (selectedOption) => selectedOption.value === option.value,
        ),
    );

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            ref={ref}
            aria-expanded={open}
            className={cn(
              'flex items-center cursor-pointer justify-between whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-muted-foreground focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background min-h-10 px-4 py-2',
              selected.length > 0 ? 'text-foreground' : '',
              className,
            )}
          >
            {selected.length > 0 && (
              <ul className="flex flex-wrap gap-x-1 gap-y-1.5">
                {selected.map((option) => {
                  return (
                    <li key={option.value}>
                      <Badge
                        variant="primary-border"
                        className="text-muted-foreground hover:text-accent-foreground"
                      >
                        {option.label}
                        <button
                          className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleUnselect(option);
                            }
                          }}
                          aria-label="Remove"
                          type="button"
                          onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            handleUnselect(option);
                          }}
                        >
                          <X className="size-3 text-muted-foreground hover:text-foreground" />
                        </button>
                      </Badge>
                    </li>
                  );
                })}
              </ul>
            )}
            {selected.length === 0 && placeholder}
            <div className="ml-1 flex items-center gap-2">
              {isClearable && selected.length > 0 && (
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
            {isSearchable && <CommandInput placeholder={searchPlaceholder} />}
            <CommandList>
              <CommandEmpty>Nothing found.</CommandEmpty>
              <CommandGroup>
                {selectables.map((option) => (
                  <CommandItem
                    key={option.value}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    disabled={
                      maxSelectable !== undefined &&
                      selected.length >= maxSelectable
                    }
                    onSelect={() => {
                      handleSelect(option);
                    }}
                    className="cursor-pointer"
                  >
                    <TypographySmall>{option.label}</TypographySmall>
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

MultiCombobox.displayName = 'MultiCombobox';

export { MultiCombobox };
