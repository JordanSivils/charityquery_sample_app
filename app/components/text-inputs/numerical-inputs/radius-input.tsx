"use client";

import { useCharityTableContext } from "@/app/table/table-context-example";
import { Input } from "@/components/ui/input";

export function RadiusFilter() {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">{`Radius (Miles)`}</p>

      <div className="flex gap-2">
        <Input
          type="number"
          placeholder="Min"
          value={draftFilters.radius ?? ""}
          onChange={(e) =>
            setDraftFilters((prev) => ({
              ...prev,
              radius: e.target.value
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