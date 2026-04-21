"use server";

import { ComboboxOption, MetadataApiItemResponse } from "./response-types";

export type OrganizationApiResponse = {
  organizationCodes: MetadataApiItemResponse[];
};


export const fetchOrganizationCodes = async (): Promise<ComboboxOption[]> => {
  const res = await fetch(
    `${process.env.BASE_URL}/metadata/organization-codes`,
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

  const data: OrganizationApiResponse = await res.json();

  return data.organizationCodes.map((item) => ({
    value: item.code,
    label: `${item.code} - ${item.description}`,
  }));
};