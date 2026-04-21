"use server";

import type { CharityFilters } from "@/app/table/table-context-example";
import { buildCharityQuery } from "./build-charity-query";

export type CharityApiRow = Record<string, unknown>;

export type FetchCharitiesResponse = {
  charities: CharityApiRow[];
  total: number;
  totalPages?: number;
  page?: number;
  limit?: number;
};

export async function fetchCharitiesAction(
  filters: CharityFilters
): Promise<FetchCharitiesResponse> {
  const query = buildCharityQuery(filters);
  const url = `${process.env.BASE_URL}/charities?${query}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": process.env.API_KEY as string,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to fetch charities: ${res.status}`);
  }

  const data = await res.json();

  return {
    charities: data.charities ?? [],
    total: data.total ?? 0,
    totalPages: data.totalPages,
    page: data.page,
    limit: data.limit,
  };
}