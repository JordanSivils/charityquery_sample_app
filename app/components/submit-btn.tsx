"use client"
import { Button } from "@/components/ui/button";
import { useCharityTableContext } from "../table/table-context-example";

export function SubmitButton() {
    const { applyFilters, draftFilters, appliedFilters } = useCharityTableContext();

    return (
        <>
        <Button onClick={applyFilters}>Apply</Button>

    <div className="space-y-4 rounded-md border p-4">
      <div>
        <h3 className="font-semibold">Draft Filters</h3>
        <pre className="text-xs">{JSON.stringify(draftFilters, null, 2)}</pre>
      </div>

      <div>
        <h3 className="font-semibold">Applied Filters</h3>
        <pre className="text-xs">{JSON.stringify(appliedFilters, null, 2)}</pre>
      </div>
    </div>
        </>
        
    )
}