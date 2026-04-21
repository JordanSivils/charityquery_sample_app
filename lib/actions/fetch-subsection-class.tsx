"use server";


export type SubsectionClassificationApiItemResponse = {
  subsection: string;
  classification: string;
  description: string;
};

export type SubsectionClassificationApiResponse = {
  subsectionAndClassificationCodes: SubsectionClassificationApiItemResponse[];
};

export type ComboboxOption = {
  subValue: string;
  classValue: string;
  label: string
};


export const fetchSubsectionClassification = async (): Promise<ComboboxOption[]> => {
  const res = await fetch(
    `${process.env.BASE_URL}/metadata/subsection-classification-codes`,
    {
      headers: {
        "x-api-key": process.env.API_KEY as string,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Subsection & Classification metadata");
  }

  const data: SubsectionClassificationApiResponse = await res.json();

  return data.subsectionAndClassificationCodes.map((item) => ({
    subValue: item.subsection,
    classValue: item.classification,
    label: `${item.description}`,
  }));
};