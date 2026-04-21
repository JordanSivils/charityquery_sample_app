"use client";

import { useCharityTableContext } from "@/app/table/table-context-example";
import { MetadataMultiCombobox } from "@/components/ui/combo-boxes/multi-select";

type ComboboxOption = {
  value: string;
  label: string;
};

export function AccountPaidMultiFilter({
    options,
  }: {
    options: ComboboxOption[];
  }) {
  const { draftFilters, setDraftFilters } = useCharityTableContext()
    return (
      <MetadataMultiCombobox
        label="Account Paid"
        placeholder="Select Account Paid"
        searchPlaceholder="Search Account Paid..."
        options={options}
        values={draftFilters.account_paid}
        onChange={(values) =>
          setDraftFilters((prev) => ({
            ...prev,
            account_paid: values,
            page: 1,
          }))
        }
        onClear={() =>
          setDraftFilters((prev) => ({
            ...prev,
            account_paid: [],
            page: 1,
          }))
        }
      />
    );
}