"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCharityTableContext } from "@/app/table/table-context-example";

export function SearchModeSelect() {
  const { draftFilters, setDraftFilters } = useCharityTableContext();

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Search Mode</label>

      <Select
        value={draftFilters.searchMode}
        onValueChange={(value) =>
          setDraftFilters((prev) => ({
            ...prev,
            searchMode: value as "standard" | "nearby",
            page: 1,
            zip: [],
            city: [],
            street: "",
            lat: undefined,
            lng: undefined,
            origin_zip: "",
          }))
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select search mode" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="standard">Standard Search</SelectItem>
          <SelectItem value="nearby">Nearby Search</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}