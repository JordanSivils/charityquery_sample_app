"use client";

import { useCharityTableContext } from "@/app/table/table-context-example";
import { MetadataMultiCombobox } from "@/components/ui/combo-boxes/multi-select";

type ComboboxOption = {
  value: string;
  label: string;
};

export function OrganizationMultiFilter({
  options,
}: {
  options: ComboboxOption[];
}) {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  return (
    <MetadataMultiCombobox
      label="Organization"
      placeholder="Select Organization"
      searchPlaceholder="Search Organization..."
      options={options}
      values={draftFilters.organization}
      onChange={(values) =>
        setDraftFilters((prev) => ({
          ...prev,
          organization: values,
          page: 1,
        }))
      }
      onClear={() =>
        setDraftFilters((prev) => ({
          ...prev,
          organization: [],
          page: 1,
        }))
      }
    />
  );
}