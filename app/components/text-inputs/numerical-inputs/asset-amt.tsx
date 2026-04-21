"use client";

import { useCharityTableContext } from "@/app/table/table-context-example";
import { Input } from "@/components/ui/input";

export function AssetAmountFilter() {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">Asset Amount</p>

      <div className="flex gap-2">
        <Input
          type="number"
          placeholder="Min"
          value={draftFilters.asset_amount_gte ?? ""}
          onChange={(e) =>
            setDraftFilters((prev) => ({
              ...prev,
              asset_amount_gte: e.target.value
                ? Number(e.target.value)
                : undefined,
              page: 1,
            }))
          }
        />

        <Input
          type="number"
          placeholder="Max"
          value={draftFilters.asset_amount_lte ?? ""}
          onChange={(e) =>
            setDraftFilters((prev) => ({
              ...prev,
              asset_amount_lte: e.target.value
                ? Number(e.target.value)
                : undefined,
              page: 1,
            }))
          }
        />
      </div>
    </div>
  );
}