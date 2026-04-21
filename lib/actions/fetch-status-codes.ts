"use server";

import { ComboboxOption, MetadataApiItemResponse } from "./response-types";

export type StatusApiResponse = {
  statusCodes: MetadataApiItemResponse[];
};


export const fetchStatusCodes = async (): Promise<ComboboxOption[]> => {
  const res = await fetch(
    `${process.env.BASE_URL}/metadata/status-codes`,
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

  const data: StatusApiResponse = await res.json();

  return data.statusCodes.map((item) => ({
    value: item.code,
    label: `${item.code} - ${item.description}`,
  }));
};