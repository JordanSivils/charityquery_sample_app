"use client";

import { MetadataMultiCombobox } from "@/components/ui/combo-boxes/multi-select";
import { charityFieldOptions } from "./field-options";
import { useCharityTableContext } from "@/app/table/table-context-example";


export function FieldsFilter() {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  return (
    <MetadataMultiCombobox
      label="Response Fields"
      placeholder="Select response fields"
      searchPlaceholder="Search fields..."
      options={charityFieldOptions}
      values={draftFilters.fields}
      onChange={(values) =>
        setDraftFilters((prev) => ({
          ...prev,
          fields: values,
          page: 1,
        }))
      }
      onClear={() =>
        setDraftFilters((prev) => ({
          ...prev,
          fields: [],
          page: 1,
        }))
      }
    />
  );
}