"use client";

import { X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCharityTableContext } from "@/app/table/table-context-example";

export function GroupSingleInput() {
  const { draftFilters, setDraftFilters } = useCharityTableContext();

  const clearGroup = () => {
    setDraftFilters((prev) => ({
      ...prev,
      group: "",
      page: 1,
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">Group</p>

      <div className="flex gap-2">
        <Input
          value={draftFilters.group}
          onChange={(e) =>
            setDraftFilters((prev) => ({
              ...prev,
              group: e.target.value,
              page: 1,
            }))
          }
          placeholder="Enter group"
        />

        <Button
          type="button"
          variant="ghost"
          onClick={clearGroup}
          disabled={!draftFilters.group}
        >
          <X className="h-4 w-4" />
          Clear
        </Button>
      </div>
    </div>
  );
}