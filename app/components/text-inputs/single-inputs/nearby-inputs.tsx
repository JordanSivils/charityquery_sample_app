"use client";

import { Input } from "@/components/ui/input";
import { useCharityTableContext } from "@/app/table/table-context-example";
import { RadiusFilter } from "../numerical-inputs/radius-input";

export function NearbyOriginInputs() {
  const { draftFilters, setDraftFilters } = useCharityTableContext();

  if (draftFilters.searchMode !== "nearby") return null;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold">Nearby Origin</h3>

      <Input
        placeholder="Latitude"
        type="number"
        value={draftFilters.lat ?? ""}
        onChange={(e) =>
          setDraftFilters((prev) => ({
            ...prev,
            lat: e.target.value === "" ? undefined : Number(e.target.value),
          }))
        }
      />

      <Input
        placeholder="Longitude"
        type="number"
        value={draftFilters.lng ?? ""}
        onChange={(e) =>
          setDraftFilters((prev) => ({
            ...prev,
            lng: e.target.value === "" ? undefined : Number(e.target.value),
          }))
        }
      />

      <Input
        placeholder="Origin ZIP"
        value={draftFilters.origin_zip}
        onChange={(e) =>
          setDraftFilters((prev) => ({
            ...prev,
            origin_zip: e.target.value,
          }))
        }
      />

      <RadiusFilter />
    </div>
  );
}