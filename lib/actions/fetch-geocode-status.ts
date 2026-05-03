"use server";

import { ComboboxOption, MetadataApiItemResponse } from "./response-types";

export type GeocodeStatusApiResponse = {
  geocodeStatusCodes: MetadataApiItemResponse[];
};


export const fetchGeocodeStatusCodes = async (): Promise<ComboboxOption[]> => {
  const res = await fetch(
    `${process.env.BASE_URL}/metadata/geocode-status-codes`,
    {
      headers: {
        "x-api-key": process.env.API_KEY as string,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch deductibility metadata");
  }

  const data: GeocodeStatusApiResponse = await res.json();

  return data.geocodeStatusCodes.map((item) => ({
    value: item.code,
    label: `${item.code} - ${item.description}`,
  }));
};