"use client";

import { useMemo, useState } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

export type ComboboxOption = {
  value: string;
  label: string;
};

interface MetadataMultiComboboxProps {
  label: string;
  placeholder: string;
  searchPlaceholder: string;
  options: ComboboxOption[];
  values: string[];
  onChange: (values: string[]) => void;
  onClear?: () => void;
  isLoading?: boolean;
}

export function MetadataMultiCombobox({
  label,
  placeholder,
  searchPlaceholder,
  options,
  values,
  onChange,
  onClear,
  isLoading = false,
}: MetadataMultiComboboxProps) {
  const [open, setOpen] = useState(false);

  const selectedLabels = useMemo(() => {
    return options
      .filter((option) => values.includes(option.value))
      .map((option) => option.label);
  }, [options, values]);

  function toggleValue(nextValue: string) {
    if (values.includes(nextValue)) {
      onChange(values.filter((value) => value !== nextValue));
      return;
    }

    onChange([...values, nextValue]);
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">{label}</p>
      <div className="flex gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
              disabled={isLoading}
            >
              <span className="truncate">
                {selectedLabels.length > 0
                  ? `${selectedLabels.length} selected`
                  : placeholder}
              </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[320px] p-0" align="start">
            <Command>
              <CommandInput placeholder={searchPlaceholder} />
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup className="max-h-72 overflow-y-auto">
                {options.map((option) => {
                  const isSelected = values.includes(option.value);

                  return (
                    <CommandItem
                      key={option.value}
                      value={`${option.value} ${option.label}`}
                      onSelect={() => toggleValue(option.value)}
                    >
                      <span className="truncate">{option.label}</span>
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          isSelected ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        <Button
          type="button"
          variant="ghost"
          onClick={onClear}
          disabled={values.length === 0}
        >
          Clear
        </Button>
      </div>

      {selectedLabels.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {options
            .filter((option) => values.includes(option.value))
            .map((option) => (
              <div
                key={option.value}
                className="flex items-center gap-1 rounded-md border px-2 py-1 text-xs"
              >
                <span>{option.label}</span>
                <button
                  type="button"
                  onClick={() =>
                    onChange(values.filter((value) => value !== option.value))
                  }
                  className="opacity-70 hover:opacity-100"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}