"use client";

import { X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCharityTableContext } from "@/app/table/table-context-example";

export function StreetSingleInput() {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  const clearStreet = () => {
    setDraftFilters((prev) => ({
      ...prev,
      street: "",
      page: 1,
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">Street</p>

      <div className="flex gap-2">
        <Input
          value={draftFilters.street}
          onChange={(e) =>
            setDraftFilters((prev) => ({
              ...prev,
              street: e.target.value,
              page: 1,
            }))
          }
          placeholder="Enter Street"
        />

        <Button
          type="button"
          variant="ghost"
          onClick={clearStreet}
          disabled={!draftFilters.street}
        >
          <X className="h-4 w-4" />
          Clear
        </Button>
      </div>
    </div>
  );
}