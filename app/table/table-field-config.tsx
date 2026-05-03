import React from "react";

export type CharityRow = Record<string, unknown>;

export type CharityFieldConfig = {
  key: string;
  label: string;
  sortable?: boolean;
  render: (row: CharityRow) => React.ReactNode;
};

export const charityFieldConfigMap: Record<string, CharityFieldConfig> = {
  ein: {
    key: "ein",
    label: "EIN",
    sortable: true,
    render: (row) => String(row.ein ?? ""),
  },
  ico: {
    key: "ico",
    label: "In Care Of",
    sortable: true,
    render: (row) => String(row.ico ?? "")
  },
  name: {
    key: "name",
    label: "Name",
    sortable: true,
    render: (row) => String(row.name ?? ""),
  },
  city: {
    key: "city",
    label: "City",
    sortable: true,
    render: (row) => String(row.city ?? ""),
  },
  zip: {
    key: "zip",
    label: "Zip Code",
    sortable: true,
    render: (row) => String(row.zip ?? ""),
  },
  state: {
    key: "state",
    label: "State",
    sortable: true,
    render: (row) => String(row.state ?? ""),
  },
  street: {
    key: "street",
    label: "Street",
    sortable: false,
    render: (row) => String(row.street ?? ""),
  },
  group: {
    key: "group",
    label: "Group",
    sortable: true,
    render: (row) => String(row.group ?? ""),
  },
  ruling: {
    key: "ruling",
    label: "Ruling",
    sortable: true,
    render: (row) => String(row.ruling ?? ""),
  },
  tax_period: {
    key: "tax_period",
    label: "Tax Period",
    sortable: true,
    render: (row) => String(row.tax_period ?? ""),
  },
  
  ntee_group: {
    key: "ntee_group",
    label: "NTEE Group",
    sortable: true,
    render: (row) => {
      const value = row.ntee_group;

      if (
        value &&
        typeof value === "object" &&
        "code" in value &&
        "description" in value
      ) {
        const obj = value as { code?: string; description?: string };
        return `${obj.code ?? ""} - ${obj.description ?? ""}`;
      }

      return String(value ?? "");
    },
  },
  ntee_code: {
    key: "ntee_code",
    label: "NTEE Code",
    sortable: true,
    render: (row) => {
      const value = row.ntee_code;

      if (
        value &&
        typeof value === "object" &&
        "code" in value &&
        "description" in value
      ) {
        const obj = value as { code?: string; description?: string };
        return `${obj.code ?? ""} - ${obj.description ?? ""}`;
      }

      return String(value ?? "");
    },
  },
  deductibility: {
    key: "deductibility",
    label: "Deductibility",
    sortable: true,
    render: (row) => {
      const value = row.deductibility;

      if (
        value &&
        typeof value === "object" &&
        "code" in value &&
        "description" in value
      ) {
        const obj = value as { code?: string; description?: string };
        return `${obj.code ?? ""} - ${obj.description ?? ""}`;
      }

      return String(value ?? "");
    },
  },
  foundation: {
    key: "foundation",
    label: "Foundation",
    sortable: true,
    render: (row) => {
      const value = row.foundation;

      if (
        value &&
        typeof value === "object" &&
        "code" in value &&
        "description" in value
      ) {
        const obj = value as { code?: string; description?: string };
        return `${obj.code ?? ""} - ${obj.description ?? ""}`;
      }

      return String(value ?? "");
    },
  },
  filing_req_code: {
    key: "filing_req_code",
    label: "Filing Required",
    sortable: true,
    render: (row) => {
      const value = row.filing_req_code;

      if (
        value &&
        typeof value === "object" &&
        "code" in value &&
        "description" in value
      ) {
        const obj = value as { code?: string; description?: string };
        return `${obj.code ?? ""} - ${obj.description ?? ""}`;
      }

      return String(value ?? "");
    },
  },
  pf_filing_req_code: {
    key: "pf_filing_req_code",
    label: "PF Form Required",
    sortable: true,
    render: (row) => {
      const value = row.pf_filing_req_code;

      if (
        value &&
        typeof value === "object" &&
        "code" in value &&
        "description" in value
      ) {
        const obj = value as { code?: string; description?: string };
        return `${obj.code ?? ""} - ${obj.description ?? ""}`;
      }

      return String(value ?? "");
    },
  },
  account_paid: {
    key: "account_paid",
    label: "Account Paid Month",
    sortable: true,
    render: (row) => {
      const value = row.account_paid;

      if (
        value &&
        typeof value === "object" &&
        "code" in value &&
        "description" in value
      ) {
        const obj = value as { code?: string; description?: string };
        return `${obj.code ?? ""} - ${obj.description ?? ""}`;
      }

      return String(value ?? "");
    },
  },
  organization: {
    key: "organization",
    label: "Organization",
    sortable: true,
    render: (row) => {
      const value = row.organization;

      if (
        value &&
        typeof value === "object" &&
        "code" in value &&
        "description" in value
      ) {
        const obj = value as { code?: string; description?: string };
        return `${obj.code ?? ""} - ${obj.description ?? ""}`;
      }

      return String(value ?? "");
    },
  },
  status: {
    key: "status",
    label: "Status",
    sortable: true,
    render: (row) => {
      const value = row.status;

      if (
        value &&
        typeof value === "object" &&
        "code" in value &&
        "description" in value
      ) {
        const obj = value as { code?: string; description?: string };
        return `${obj.code ?? ""} - ${obj.description ?? ""}`;
      }

      return String(value ?? "");
    },
  },
  affiliation: {
    key: "affiliation",
    label: "Affiliation",
    sortable: true,
    render: (row) => {
      const value = row.affiliation;

      if (
        value &&
        typeof value === "object" &&
        "code" in value &&
        "description" in value
      ) {
        const obj = value as { code?: string; description?: string };
        return `${obj.code ?? ""} - ${obj.description ?? ""}`;
      }

      return String(value ?? "");
    },
  },
  subsection_classification: {
    key: "subsection_classification",
    label: "Subsection & Classification",
    sortable: true,
    render: (row) => {
      const value = row.subsection_classification;

      if (
        value &&
        typeof value === "object" &&
        "subsection" in value &&
        "classification" in value &&
        "description" in value
      ) {
        const obj = value as { subsection?: string; classification?: string; description?: string };
        return `${obj.description ?? ""}`;
      }

      return String(value ?? "");
    },
  },
  asset_amount: {
  key: "asset_amount",
  label: "Assets",
  sortable: true,
  render: (row) =>
    typeof row.asset_amount === "number"
      ? row.asset_amount
      : String(row.asset_amount ?? "-"),
},
  income_amount: {
    key: "income_amount",
    label: "Income Amount",
    sortable: true,
    render: (row) =>
      typeof row.income_amount === "number"
        ? row.income_amount.toLocaleString()
        : String(row.income_amount ?? "-"),
  },
  revenue_amount: {
    key: "revenue_amount",
    label: "Revenue Amount",
    sortable: true,
    render: (row) =>
      typeof row.revenue_amount === "number"
        ? row.revenue_amount.toLocaleString()
        : String(row.revenue_amount ?? "-"),
  },
  geocode_status: {
    key: "geocode_status",
    label: "Geocoding Status",
    sortable: true,
    render: (row) => {
      const value = row.geocode_status;

      if (
        value &&
        typeof value === "object" &&
        "code" in value &&
        "description" in value
      ) {
        const obj = value as { code?: string; description?: string };
        return `${obj.code ?? ""} - ${obj.description ?? ""}`;
      }

      return String(value ?? "");
    },
  },
  lat: {
    key: "lat",
    label: "Latitude",
    sortable: true,
    render: (value) => value == null ? "—" : String(value),
  },
  lng: {
    key: "lng",
    label: "Longitude",
    sortable: true,
    render: (value) => value == null ? "—" : String(value),
  },
  distance_miles: {
  key: "distance_miles",
  label: "Distance",
  sortable: true,
  render: (row) => {
    const distance = Number(row.distance_miles);

    return Number.isFinite(distance) ? `${distance.toFixed(2)} mi` : "—";
  },
},
}