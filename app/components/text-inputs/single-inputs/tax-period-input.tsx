"use client";

import { X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCharityTableContext } from "@/app/table/table-context-example";

export function TaxPeriodSingleInput() {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  const clearTaxPeriod = () => {
    setDraftFilters((prev) => ({
      ...prev,
      tax_period: "",
      page: 1,
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">Tax Period</p>

      <div className="flex gap-2">
        <Input
          value={draftFilters.tax_period}
          onChange={(e) =>
            setDraftFilters((prev) => ({
              ...prev,
              tax_period: e.target.value,
              page: 1,
            }))
          }
          placeholder="Enter Tax Period"
        />

        <Button
          type="button"
          variant="ghost"
          onClick={clearTaxPeriod}
          disabled={!draftFilters.tax_period}
        >
          <X className="h-4 w-4" />
          Clear
        </Button>
      </div>
    </div>
  );
}