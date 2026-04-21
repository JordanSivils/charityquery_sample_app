"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { useCharityTableContext } from "./table-context-example";
import { charityFieldConfigMap } from "./table-field-config";

export function CharityDataTable() {
  const {
    charities,
    loading,
    appliedFilters,
    setAppliedFilters,
    setDraftFilters,
  } = useCharityTableContext();

  const visibleColumns = appliedFilters.fields
    .map((field) => charityFieldConfigMap[field])
    .filter(Boolean);

  return (
    <div className="space-y-4">
      <div className="relative">
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 pointer-events-none">
            <p>Loading...</p>
          </div>
        )}

        <Table>
          <TableHeader>
            <TableRow>
              {visibleColumns.map((column) => (
                <TableHead key={column.key}>
                  <div className="flex items-center gap-2">
                    <span>{column.label}</span>

                    {column.sortable && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => {
                          const nextDir =
                            appliedFilters.sortBy === column.key &&
                            appliedFilters.sortDir === "asc"
                              ? "desc"
                              : "asc";

                          setAppliedFilters((prev) => ({
                            ...prev,
                            sortBy: column.key,
                            sortDir: nextDir,
                            page: 1,
                          }));

                          setDraftFilters((prev) => ({
                            ...prev,
                            sortBy: column.key,
                            sortDir: nextDir,
                            page: 1,
                          }));
                        }}
                      >
                        <ArrowUpDown size={14} />
                      </Button>
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {charities.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={visibleColumns.length || 1}
                  className="py-8 text-center"
                >
                  No charities found.
                </TableCell>
              </TableRow>
            ) : (
              charities.map((row, index) => (
                <TableRow key={String(row.id ?? row.ein ?? index)}>
                  {visibleColumns.map((column) => (
                    <TableCell key={column.key}>
                      {column.render(row)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}