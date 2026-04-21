"use client";

import { useCharityTableContext } from "@/app/table/table-context-example";
import { MetadataSingleCombobox } from "@/components/ui/combo-boxes/single-select";

export function PfFilingFilter({
  options,
}: {
  options: { value: string; label: string }[];
}) {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  return (
    <MetadataSingleCombobox
      label="PF Filing Required"
      placeholder="Select PF Filing Code"
      searchPlaceholder="Search PF Filing..."
      options={options}
      value={draftFilters.pf_filing_req_code}
      onChange={(value) =>
        setDraftFilters((prev) => ({
          ...prev,
          pf_filing_req_code: value,
          page: 1,
        }))
      }
      onClear={() =>
        setDraftFilters((prev) => ({
          ...prev,
          pf_filing_req_code: "",
          page: 1,
        }))
      }
    />
  );
}