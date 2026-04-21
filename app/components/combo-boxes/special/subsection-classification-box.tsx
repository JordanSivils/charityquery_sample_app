"use client";

import { useCharityTableContext } from "@/app/table/table-context-example";
import { SubsectionClassificationCombobox, SubsectionClassificationOption } from "@/components/ui/combo-boxes/subsection-classification";


export function SubsectionClassificationFilter({
  options,
}: {
  options: SubsectionClassificationOption[];
}) {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  return (
    <SubsectionClassificationCombobox
      label="Subsection & Classification"
      placeholder="Select subsection and classification"
      searchPlaceholder="Search subsection/classification..."
      options={options}
      subsection={draftFilters.subsection}
      classification={draftFilters.classification}
      onChange={({ subsection, classification }) =>
        setDraftFilters((prev) => ({
          ...prev,
          subsection,
          classification,
          page: 1,
        }))
      }
      onClear={() =>
        setDraftFilters((prev) => ({
          ...prev,
          subsection: "",
          classification: "",
          page: 1,
        }))
      }
    />
  );
}