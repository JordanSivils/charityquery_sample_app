"use client";

import { useCharityTableContext } from "@/app/table/table-context-example";
import { MetadataMultiCombobox } from "@/components/ui/combo-boxes/multi-select";

type ComboboxOption = {
  value: string;
  label: string;
};

export function FoundationMultiFilter({
  options,
}: {
  options: ComboboxOption[];
}) {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  return (
    <MetadataMultiCombobox
      label="Foundation"
      placeholder="Select Foundation"
      searchPlaceholder="Search Foundation..."
      options={options}
      values={draftFilters.foundation}
      onChange={(values) =>
        setDraftFilters((prev) => ({
          ...prev,
          foundation: values,
          page: 1,
        }))
      }
      onClear={() =>
        setDraftFilters((prev) => ({
          ...prev,
          foundation: [],
          page: 1,
        }))
      }
    />
  );
}