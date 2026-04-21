"use client";

import { useCharityFilters } from "@/app/contexts/charity-filter-context";
import { useCharityTableContext } from "@/app/table/table-context-example";
import { MetadataMultiCombobox } from "@/components/ui/combo-boxes/multi-select";

type ComboboxOption = {
  value: string;
  label: string;
};

export function NteeGroupMultiFilter({
  options,
}: {
  options: ComboboxOption[];
}) {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  return (
    <MetadataMultiCombobox
      label="Ntee Groups"
      placeholder="Select Ntee Group"
      searchPlaceholder="Search Ntee Groups..."
      options={options}
      values={draftFilters.ntee_group}
      onChange={(values) =>
        setDraftFilters((prev) => ({
          ...prev,
          ntee_group: values,
          page: 1,
        }))
      }
      onClear={() =>
        setDraftFilters((prev) => ({
          ...prev,
          ntee_group: [],
          page: 1,
        }))
      }
    />
  );
}