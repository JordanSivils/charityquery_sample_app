"use client";
import { useCharityTableContext } from "@/app/table/table-context-example";
import { MetadataMultiCombobox } from "@/components/ui/combo-boxes/multi-select";

type ComboboxOption = {
  value: string;
  label: string;
};

export function StatesMultiFilter({
  options,
}: {
  options: ComboboxOption[];
}) {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  return (
    <MetadataMultiCombobox
      label="States"
      placeholder="Select States"
      searchPlaceholder="Search States..."
      options={options}
      values={draftFilters.state}
      onChange={(values) =>
        setDraftFilters((prev) => ({
          ...prev,
          state: values,
          page: 1,
        }))
      }
      onClear={() =>
        setDraftFilters((prev) => ({
          ...prev,
          state: [],
          page: 1,
        }))
      }
    />
  );
}