"use server";

import { ComboboxOption } from "./response-types";

export type MetadataApiFilingResponse = {
  code: string;
  form: string;
  description: string;
};

export type FilingReqApiResponse = {
  filingRequiredCodes: MetadataApiFilingResponse[];
};


export const fetchFilingReqCodes = async (): Promise<ComboboxOption[]> => {
  const res = await fetch(
    `${process.env.BASE_URL}/metadata/filing-required-codes`,
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

  const data: FilingReqApiResponse = await res.json();

  return data.filingRequiredCodes.map((item) => ({
    value: item.code,
    label: `${item.code} - ${item.description}`,
  }));
};