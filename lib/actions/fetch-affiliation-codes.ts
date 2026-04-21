"use server";

import { ComboboxOption, MetadataApiItemResponse } from "./response-types";

export type AffiliationApiResponse = {
  affiliationCodes: MetadataApiItemResponse[];
};


export const fetchAffiliationCodes = async (): Promise<ComboboxOption[]> => {
  const res = await fetch(
    `${process.env.BASE_URL}/metadata/affiliation-codes`,
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

  const data: AffiliationApiResponse = await res.json();

  return data.affiliationCodes.map((item) => ({
    value: item.code,
    label: `${item.code} - ${item.description}`,
  }));
};