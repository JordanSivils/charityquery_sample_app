"use client";

import { useCharityFilters } from "@/app/contexts/charity-filter-context";
import { useCharityTableContext } from "@/app/table/table-context-example";
import { MetadataMultiCombobox } from "@/components/ui/combo-boxes/multi-select";

type ComboboxOption = {
  value: string;
  label: string;
};

export function FilingReqMultiFilter({
  options,
}: {
  options: ComboboxOption[];
}) {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  return (
    <MetadataMultiCombobox
      label="Filing Required"
      placeholder="Select Filing Required"
      searchPlaceholder="Search Filing Required..."
      options={options}
      values={draftFilters.filing_req_code}
      onChange={(values) =>
        setDraftFilters((prev) => ({
          ...prev,
          filing_req_code: values,
          page: 1,
        }))
      }
      onClear={() =>
        setDraftFilters((prev) => ({
          ...prev,
          filing_req_code: [],
          page: 1,
        }))
      }
    />
  );
}