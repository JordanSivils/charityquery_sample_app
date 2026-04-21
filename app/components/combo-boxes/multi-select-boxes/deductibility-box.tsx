"use client";

import { useCharityFilters } from "@/app/contexts/charity-filter-context";
import { useCharityTableContext } from "@/app/table/table-context-example";
import { MetadataMultiCombobox } from "@/components/ui/combo-boxes/multi-select";

type ComboboxOption = {
  value: string;
  label: string;
};

export function DeductibilityMultiFilter({
  options,
}: {
  options: ComboboxOption[];
}) {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  return (
    <MetadataMultiCombobox
      label="Deductibility"
      placeholder="Select deductibility"
      searchPlaceholder="Search deductibility..."
      options={options}
      values={draftFilters.deductibility}
      onChange={(values) =>
        setDraftFilters((prev) => ({
          ...prev,
          deductibility: values,
          page: 1,
        }))
      }
      onClear={() =>
        setDraftFilters((prev) => ({
          ...prev,
          deductibility: [],
          page: 1,
        }))
      }
    />
  );
}