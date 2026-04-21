"use server";

import { ComboboxOption, MetadataApiItemResponse } from "./response-types";

export type AccountPaidApiResponse = {
  accountsPaidCodes: MetadataApiItemResponse[];
};


export const fetchAccountPaid = async (): Promise<ComboboxOption[]> => {
  const res = await fetch(
    `${process.env.BASE_URL}/metadata/account-paid-codes`,
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

  const data: AccountPaidApiResponse = await res.json();

  return data.accountsPaidCodes.map((item) => ({
    value: item.code,
    label: `${item.code} - ${item.description}`,
  }));
};