"use client";

import { X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCharityTableContext } from "@/app/table/table-context-example";

export function CharityNameSingleInput() {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  const clearName = () => {
    setDraftFilters((prev) => ({
      ...prev,
      name: "",
      page: 1,
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">Charity Name</p>

      <div className="flex gap-2">
        <Input
          value={draftFilters.name}
          onChange={(e) =>
            setDraftFilters((prev) => ({
              ...prev,
              name: e.target.value,
              page: 1,
            }))
          }
          placeholder="Enter Name"
        />

        <Button
          type="button"
          variant="ghost"
          onClick={clearName}
          disabled={!draftFilters.name}
        >
          <X className="h-4 w-4" />
          Clear
        </Button>
      </div>
    </div>
  );
}