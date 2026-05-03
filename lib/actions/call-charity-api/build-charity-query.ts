import type { CharityFilters } from "@/app/table/table-context-example";

export function buildCharityQuery(filters: CharityFilters): string {
  const params = new URLSearchParams();

  if (filters.pf_filing_req_code) {
    params.set("pf_filing_req_code", filters.pf_filing_req_code);
  }

  if (filters.subsection) {
    params.set("subsection", filters.subsection);
  }

  if (filters.classification) {
    params.set("classification", filters.classification);
  }

  if (filters.name) {
    params.set("name", filters.name);
  }

  if (filters.group) {
    params.set("group", filters.group);
  }

  if (filters.street) {
    params.set("street", filters.street);
  }

  if (filters.ruling) {
    params.set("ruling", filters.ruling);
  }

  if (filters.tax_period) {
    params.set("tax_period", filters.tax_period);
  }

  if (filters.asset_amount_gte !== undefined) {
    params.set("asset_amount_gte", String(filters.asset_amount_gte));
  }

  if (filters.asset_amount_lte !== undefined) {
    params.set("asset_amount_lte", String(filters.asset_amount_lte));
  }

  if (filters.income_amount_gte !== undefined) {
    params.set("income_amount_gte", String(filters.income_amount_gte));
  }

  if (filters.income_amount_lte !== undefined) {
    params.set("income_amount_lte", String(filters.income_amount_lte));
  }

  if (filters.revenue_amount_gte !== undefined) {
    params.set("revenue_amount_gte", String(filters.revenue_amount_gte));
  }

  if (filters.revenue_amount_lte !== undefined) {
    params.set("revenue_amount_lte", String(filters.revenue_amount_lte));
  }

  filters.foundation.forEach((value) => {
    params.append("foundation", value);
  });

  filters.geocode_status.forEach((value) => {
    params.append("geocode_status", value)
  })

  filters.organization.forEach((value) => {
    params.append("organization", value);
  });

  filters.status.forEach((value) => {
    params.append("status", value);
  });

  filters.filing_req_code.forEach((value) => {
    params.append("filing_req_code", value);
  });

  filters.affiliation.forEach((value) => {
    params.append("affiliation", value);
  });

  filters.zip.forEach((value) => {
    params.append("zip", value);
  });

  filters.account_paid.forEach((value) => {
    params.append("account_paid", value);
  });

  filters.ntee_group.forEach((value) => {
    params.append("ntee_group", value);
  });

  filters.ntee_code.forEach((value) => {
    params.append("ntee_code", value);
  });

  filters.deductibility.forEach((value) => {
    params.append("deductibility", value);
  });

   filters.city.forEach((value) => {
    params.append("city", value);
  });

   filters.state.forEach((value) => {
    params.append("state", value);
  });

  if (filters.fields.length) {
    params.set("fields", filters.fields.join(","));
  }

  params.set("sortBy", filters.sortBy);
  params.set("sortDir", filters.sortDir);
  params.set("page", String(filters.page));
  params.set("limit", String(filters.limit));

  return params.toString();
}