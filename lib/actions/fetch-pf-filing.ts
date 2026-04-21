"use server";

import { ComboboxOption, MetadataApiItemResponse } from "./response-types";

export type PfFilingApiResponse = {
  pfFilingRequiredCodes: MetadataApiItemResponse[];
};


export const fetchPfFiling = async (): Promise<ComboboxOption[]> => {
  const res = await fetch(
    `${process.env.BASE_URL}/metadata/pf-required-codes`,
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

  const data: PfFilingApiResponse = await res.json();

  return data.pfFilingRequiredCodes.map((item) => ({
    value: item.code,
    label: `${item.code} - ${item.description}`,
  }));
};