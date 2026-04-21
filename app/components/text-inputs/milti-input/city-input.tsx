"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCharityTableContext } from "@/app/table/table-context-example";

export function CityMultiInput() {
  const { draftFilters, setDraftFilters } = useCharityTableContext()
  const [cityInput, setCityInput] = useState("");

  const addCity = () => {
    const trimmed = cityInput.trim();

    if (!trimmed) return;

    if (draftFilters.city.includes(trimmed)) {
      setCityInput("");
      return;
    }

    setDraftFilters((prev) => ({
      ...prev,
      city: [...prev.city, trimmed],
      page: 1,
    }));

    setCityInput("");
  };

  const removeCity = (cityToRemove: string) => {
    setDraftFilters((prev) => ({
      ...prev,
      city: prev.city.filter((city) => city !== cityToRemove),
      page: 1,
    }));
  };

  const clearAll = () => {
    setDraftFilters((prev) => ({
      ...prev,
      city: [],
      page: 1,
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">Citeis</p>

      <div className="flex gap-2">
        <Input
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addCity();
            }
          }}
          placeholder="Enter City"
        />

        <Button type="button" onClick={addCity}>
          <Plus className="h-4 w-4" />
          Add
        </Button>

        <Button
          type="button"
          variant="ghost"
          onClick={clearAll}
          disabled={draftFilters.city.length === 0}
        >
          Clear
        </Button>
      </div>

      {draftFilters.city.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {draftFilters.city.map((city) => (
            <div
              key={city}
              className="flex items-center gap-1 rounded-md border px-2 py-1 text-sm"
            >
              <span>{city}</span>
              <button
                type="button"
                onClick={() => removeCity(city)}
                className="opacity-70 hover:opacity-100"
                aria-label={`Remove ${city}`}
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}