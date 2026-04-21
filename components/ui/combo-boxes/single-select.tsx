"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

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

interface MetadataSingleComboboxProps {
  label: string;
  placeholder: string;
  searchPlaceholder: string;
  options: ComboboxOption[];
  value?: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  isLoading?: boolean;
}

export function MetadataSingleCombobox({
  label,
  placeholder,
  searchPlaceholder,
  options,
  value,
  onChange,
  onClear,
  isLoading = false,
}: MetadataSingleComboboxProps) {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((option) => option.value === value);

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
              {selectedOption ? selectedOption.label : placeholder}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-75 p-0" align="start">
            <Command>
              <CommandInput placeholder={searchPlaceholder} />
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup className="max-h-72 overflow-y-auto">
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={`${option.value} ${option.label}`}
                    onSelect={() => {
                      onChange(option.value);
                      setOpen(false);
                    }}
                  >
                    <span className="truncate">{option.label}</span>
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        <Button
          type="button"
          variant="ghost"
          onClick={onClear}
          disabled={!value}
        >
          Clear
        </Button>
      </div>
    </div>
  );
}