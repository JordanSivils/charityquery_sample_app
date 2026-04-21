"use client";

import { useCharityFilters } from "@/app/contexts/charity-filter-context";
import { useCharityTableContext } from "@/app/table/table-context-example";
import { MetadataMultiCombobox } from "@/components/ui/combo-boxes/multi-select";

type ComboboxOption = {
  value: string;
  label: string;
};

export function NteeCodeMultiFilter({
  options,
}: {
  options: ComboboxOption[];
}) {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  return (
    <MetadataMultiCombobox
      label="Ntee Codes"
      placeholder="Select Ntee Code"
      searchPlaceholder="Search Ntee Codes..."
      options={options}
      values={draftFilters.ntee_code}
      onChange={(values) =>
        setDraftFilters((prev) => ({
          ...prev,
          ntee_code: values,
          page: 1,
        }))
      }
      onClear={() =>
        setDraftFilters((prev) => ({
          ...prev,
          ntee_code: [],
          page: 1,
        }))
      }
    />
  );
}