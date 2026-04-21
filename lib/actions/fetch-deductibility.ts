"use server";

import { ComboboxOption, MetadataApiItemResponse } from "./response-types";

export type DeductibilityApiResponse = {
  deductibilityCodes: MetadataApiItemResponse[];
};


export const fetchDeductibility = async (): Promise<ComboboxOption[]> => {
  const res = await fetch(
    `${process.env.BASE_URL}/metadata/deductibility-codes`,
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

  const data: DeductibilityApiResponse = await res.json();

  return data.deductibilityCodes.map((item) => ({
    value: item.code,
    label: `${item.code} - ${item.description}`,
  }));
};