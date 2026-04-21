"use client";

import { X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCharityTableContext } from "@/app/table/table-context-example";

export function ActivitySingleInput() {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  const clearActivity = () => {
    setDraftFilters((prev) => ({
      ...prev,
      activity: "",
      page: 1,
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">Activity</p>

      <div className="flex gap-2">
        <Input
          value={draftFilters.activity}
          onChange={(e) =>
            setDraftFilters((prev) => ({
              ...prev,
              activity: e.target.value,
              page: 1,
            }))
          }
          placeholder="Enter Activity"
        />

        <Button
          type="button"
          variant="ghost"
          onClick={clearActivity}
          disabled={!draftFilters.activity}
        >
          <X className="h-4 w-4" />
          Clear
        </Button>
      </div>
    </div>
  );
}