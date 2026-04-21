"use server";

import { ComboboxOption, MetadataApiItemResponse } from "./response-types";

export type NteeCodesApiResponse = {
  nteeCodes: MetadataApiItemResponse[];
};


export const fetchNteeCodes = async (): Promise<ComboboxOption[]> => {
  const res = await fetch(
    `${process.env.BASE_URL}/metadata/ntee-codes`,
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

  const data: NteeCodesApiResponse = await res.json();

  return data.nteeCodes.map((item) => ({
    value: item.code,
    label: `${item.code} - ${item.description}`,
  }));
};