"use client";

import { useCharityFilters } from "@/app/contexts/charity-filter-context";
import { useCharityTableContext } from "@/app/table/table-context-example";
import { MetadataMultiCombobox } from "@/components/ui/combo-boxes/multi-select";

type ComboboxOption = {
  value: string;
  label: string;
};

export function AffiliationMultiFilter({
  options,
}: {
  options: ComboboxOption[];
}) {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  return (
    <MetadataMultiCombobox
      label="Affiliation"
      placeholder="Select Affiliation"
      searchPlaceholder="Search Affiliation..."
      options={options}
      values={draftFilters.affiliation}
      onChange={(values) =>
        setDraftFilters((prev) => ({
          ...prev,
          affiliation: values,
          page: 1,
        }))
      }
      onClear={() =>
        setDraftFilters((prev) => ({
          ...prev,
          affiliation: [],
          page: 1,
        }))
      }
    />
  );
}