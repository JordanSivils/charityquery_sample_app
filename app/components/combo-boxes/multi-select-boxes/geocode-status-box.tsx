"use client";

import { useCharityTableContext } from "@/app/table/table-context-example";
import { MetadataMultiCombobox } from "@/components/ui/combo-boxes/multi-select";

type ComboboxOption = {
  value: string;
  label: string;
};

export function GeocodeStatusMultiFilter({
  options,
}: {
  options: ComboboxOption[];
}) {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  return (
    <MetadataMultiCombobox
      label="Geocode Status"
      placeholder="Select Geocode Status"
      searchPlaceholder="Search GeocodeStatus..."
      options={options}
      values={draftFilters.geocode_status}
      onChange={(values) =>
        setDraftFilters((prev) => ({
          ...prev,
          geocode_status: values,
          page: 1,
        }))
      }
      onClear={() =>
        setDraftFilters((prev) => ({
          ...prev,
          geocode_status: [],
          page: 1,
        }))
      }
    />
  );
}