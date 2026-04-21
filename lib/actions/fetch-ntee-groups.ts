"use server";

import { ComboboxOption, MetadataApiItemResponse } from "./response-types";

export type NteeGroupsApiResponse = {
  nteeGroups: MetadataApiItemResponse[];
};


export const fetchNteeGroups = async (): Promise<ComboboxOption[]> => {
  const res = await fetch(
    `${process.env.BASE_URL}/metadata/ntee-groups`,
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

  const data: NteeGroupsApiResponse = await res.json();

  return data.nteeGroups.map((item) => ({
    value: item.code,
    label: `${item.code} - ${item.description}`,
  }));
};