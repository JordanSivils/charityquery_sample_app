"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCharityTableContext } from "@/app/table/table-context-example";

export function ZipMultiInput() {
  const { draftFilters, setDraftFilters } = useCharityTableContext()
  const [zipInput, setZipInput] = useState("");

  const addZip = () => {
    const trimmed = zipInput.trim();

    if (!trimmed) return;

    if (draftFilters.zip.includes(trimmed)) {
      setZipInput("");
      return;
    }

    setDraftFilters((prev) => ({
      ...prev,
      zip: [...prev.zip, trimmed],
      page: 1,
    }));

    setZipInput("");
  };

  const removeZip = (zipToRemove: string) => {
    setDraftFilters((prev) => ({
      ...prev,
      zip: prev.zip.filter((zip) => zip !== zipToRemove),
      page: 1,
    }));
  };

  const clearAll = () => {
    setDraftFilters((prev) => ({
      ...prev,
      zip: [],
      page: 1,
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">ZIP Codes</p>

      <div className="flex gap-2">
        <Input
          value={zipInput}
          onChange={(e) => setZipInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addZip();
            }
          }}
          placeholder="Enter ZIP code"
        />

        <Button type="button" onClick={addZip}>
          <Plus className="h-4 w-4" />
          Add
        </Button>

        <Button
          type="button"
          variant="ghost"
          onClick={clearAll}
          disabled={draftFilters.zip.length === 0}
        >
          Clear
        </Button>
      </div>

      {draftFilters.zip.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {draftFilters.zip.map((zip) => (
            <div
              key={zip}
              className="flex items-center gap-1 rounded-md border px-2 py-1 text-sm"
            >
              <span>{zip}</span>
              <button
                type="button"
                onClick={() => removeZip(zip)}
                className="opacity-70 hover:opacity-100"
                aria-label={`Remove ${zip}`}
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