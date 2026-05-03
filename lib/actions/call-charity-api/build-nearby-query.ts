import type { CharityFilters } from "@/app/table/table-context-example";

export function buildNearbyCharityQuery(filters: CharityFilters): string {
  const params = new URLSearchParams();

  // --- Origin (REQUIRED LOGIC) ---
  if (filters.lat !== undefined && filters.lng !== undefined) {
    params.set("lat", String(filters.lat));
    params.set("lng", String(filters.lng));
  } else if (filters.origin_zip) {
    params.set("origin_zip", filters.origin_zip);
  }

  // --- Standard shared filters ---
  if (filters.name) {
    params.set("name", filters.name);
  }

  if (filters.group) {
    params.set("group", filters.group);
  }

  if (filters.subsection) {
    params.set("subsection", filters.subsection);
  }

  if (filters.classification) {
    params.set("classification", filters.classification);
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

  if (filters.radius !== undefined) {
    params.set("radius", String(filters.radius));
  }

  // --- Multi-select filters ---
  filters.foundation.forEach((v) => params.append("foundation", v));
  filters.organization.forEach((v) => params.append("organization", v));
  filters.status.forEach((v) => params.append("status", v));
  filters.filing_req_code.forEach((v) => params.append("filing_req_code", v));
  filters.affiliation.forEach((v) => params.append("affiliation", v));
  filters.account_paid.forEach((v) => params.append("account_paid", v));
  filters.ntee_group.forEach((v) => params.append("ntee_group", v));
  filters.ntee_code.forEach((v) => params.append("ntee_code", v));
  filters.deductibility.forEach((v) => params.append("deductibility", v));
  filters.state.forEach((v) => params.append("state", v));

  // --- Nearby-specific ---
  filters.geocode_status.forEach((v) => params.append("geocode_status", v));

  // --- Fields ---
  if (filters.fields.length) {
    params.set("fields", filters.fields.join(","));
  }

  // --- Pagination / sorting ---
  params.set("sortBy", filters.sortBy);
  params.set("sortDir", filters.sortDir);
  params.set("page", String(filters.page));
  params.set("limit", String(filters.limit));

  return params.toString();
}