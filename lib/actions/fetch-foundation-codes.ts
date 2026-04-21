"use server";

import { ComboboxOption, MetadataApiItemResponse } from "./response-types";

export type FoundationApiResponse = {
  foundationCodes: MetadataApiItemResponse[];
};


export const fetchFoundationCodes = async (): Promise<ComboboxOption[]> => {
  const res = await fetch(
    `${process.env.BASE_URL}/metadata/foundation-codes`,
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

  const data: FoundationApiResponse = await res.json();

  return data.foundationCodes.map((item) => ({
    value: item.code,
    label: `${item.code} - ${item.description}`,
  }));
};