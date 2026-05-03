"use client";

import { useCharityTableContext } from "@/app/table/table-context-example";
import { MetadataMultiCombobox } from "@/components/ui/combo-boxes/multi-select";

type ComboboxOption = {
  value: string;
  label: string;
};

export function StatusMultiFilter({
  options,
}: {
  options: ComboboxOption[];
}) {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  return (
    <MetadataMultiCombobox
      label="Status"
      placeholder="Select Status"
      searchPlaceholder="Search Status..."
      options={options}
      values={draftFilters.status}
      onChange={(values) =>
        setDraftFilters((prev) => ({
          ...prev,
          status: values,
          page: 1,
        }))
      }
      onClear={() =>
        setDraftFilters((prev) => ({
          ...prev,
          status: [],
          page: 1,
        }))
      }
    />
  );
}