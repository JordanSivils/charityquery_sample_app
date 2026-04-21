"use client";

import { X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCharityTableContext } from "@/app/table/table-context-example";

export function RulingSingleInput() {
  const { draftFilters, setDraftFilters } = useCharityTableContext()

  const clearRuling = () => {
    setDraftFilters((prev) => ({
      ...prev,
      ruling: "",
      page: 1,
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">Ruling</p>

      <div className="flex gap-2">
        <Input
          value={draftFilters.ruling}
          onChange={(e) =>
            setDraftFilters((prev) => ({
              ...prev,
              ruling: e.target.value,
              page: 1,
            }))
          }
          placeholder="Enter Ruling"
        />

        <Button
          type="button"
          variant="ghost"
          onClick={clearRuling}
          disabled={!draftFilters.ruling}
        >
          <X className="h-4 w-4" />
          Clear
        </Button>
      </div>
    </div>
  );
}