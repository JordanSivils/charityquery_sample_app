"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useCharityTableContext } from "./table-context-example";

import { PfFilingFilter } from "../components/combo-boxes/single-select-boxes/pf-filing-box";
import { SubsectionClassificationFilter } from "../components/combo-boxes/special/subsection-classification-box";
import { DeductibilityMultiFilter } from "../components/combo-boxes/multi-select-boxes/deductibility-box";
import { NteeCodeMultiFilter } from "../components/combo-boxes/multi-select-boxes/ntee-codes-box";
import { NteeGroupMultiFilter } from "../components/combo-boxes/multi-select-boxes/ntee-group-box";
import { StatusMultiFilter } from "../components/combo-boxes/multi-select-boxes/status-box";
import { FoundationMultiFilter } from "../components/combo-boxes/multi-select-boxes/foundation-box";
import { FilingReqMultiFilter } from "../components/combo-boxes/multi-select-boxes/filing-req-box";
import { AffiliationMultiFilter } from "../components/combo-boxes/multi-select-boxes/affiliation-box";
import { AccountPaidMultiFilter } from "../components/combo-boxes/multi-select-boxes/account-paid-box";
import { StatesMultiFilter } from "../components/combo-boxes/multi-select-boxes/states-box";
import { OrganizationMultiFilter } from "../components/combo-boxes/multi-select-boxes/organization-box";
import { ZipMultiInput } from "../components/text-inputs/milti-input/zip-code-input";
import { CityMultiInput } from "../components/text-inputs/milti-input/city-input";
import { GroupSingleInput } from "../components/text-inputs/single-inputs/groups-input";
import { StreetSingleInput } from "../components/text-inputs/single-inputs/street-input";
import { RulingSingleInput } from "../components/text-inputs/single-inputs/ruling-input";
import { TaxPeriodSingleInput } from "../components/text-inputs/single-inputs/tax-period-input";
import { CharityNameSingleInput } from "../components/text-inputs/single-inputs/charity-name-input";
import { IncomeAmountFilter } from "../components/text-inputs/numerical-inputs/income-amt";
import { AssetAmountFilter } from "../components/text-inputs/numerical-inputs/asset-amt";
import { RevenueAmountFilter } from "../components/text-inputs/numerical-inputs/revenue-amt";
import { FieldsFilter } from "../components/combo-boxes/fields-multi-select-box/fields-filter-box";
import { SheetWrapper } from "./sheet-wrapper";
import { SearchModeSelect } from "../components/selects/search-mode-select";
import { NearbyOriginInputs } from "../components/text-inputs/single-inputs/nearby-inputs";
import { GeocodeStatusMultiFilter } from "../components/combo-boxes/multi-select-boxes/geocode-status-box";

type Option = { value: string; label: string };
type PairOption = { subValue: string; classValue: string; label: string };

interface CharityTableTopperProps {
  pfFilingOpts: Option[];
  deductibilityOpts: Option[];
  nteeCodeOpts: Option[];
  nteeGroupOpts: Option[];
  statusOpts: Option[];
  foundationOpts: Option[];
  filingRequiredOpts: Option[];
  affiliationOpts: Option[];
  accountPaidOpts: Option[];
  subAndClassOpts: PairOption[];
  stateOpts: Option[];
  organizationOpts: Option[];
  geocodeStatusOpts: Option[]
}

export function CharityTableTopper({
  pfFilingOpts,
  deductibilityOpts,
  nteeCodeOpts,
  nteeGroupOpts,
  statusOpts,
  foundationOpts,
  filingRequiredOpts,
  affiliationOpts,
  accountPaidOpts,
  subAndClassOpts,
  stateOpts,
  organizationOpts,
  geocodeStatusOpts,
}: CharityTableTopperProps) {
  const {
    applyFilters,
    resetAll,
    resetDraftToApplied,
    page,
    totalPages,
    totalCharities,
    loading,
    setPage,
    nextPage,
    prevPage,
    appliedFilters,
    draftFilters,
  } = useCharityTableContext();

  return (
    <div className="flex flex-col gap-4 rounded-xl border p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <SheetWrapper>
            <div className="flex flex-col gap-6">
              <SearchModeSelect />
              <NearbyOriginInputs />
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">Single Select</h3>
                <PfFilingFilter options={pfFilingOpts} />
                <SubsectionClassificationFilter options={subAndClassOpts} />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">Multi Select</h3>
                <GeocodeStatusMultiFilter options={geocodeStatusOpts} />
                <DeductibilityMultiFilter options={deductibilityOpts} />
                <NteeCodeMultiFilter options={nteeCodeOpts} />
                <NteeGroupMultiFilter options={nteeGroupOpts} />
                <StatusMultiFilter options={statusOpts} />
                <FoundationMultiFilter options={foundationOpts} />
                <FilingReqMultiFilter options={filingRequiredOpts} />
                <AffiliationMultiFilter options={affiliationOpts} />
                <AccountPaidMultiFilter options={accountPaidOpts} />
                <StatesMultiFilter options={stateOpts} />
                <OrganizationMultiFilter options={organizationOpts} />
              </div>

              {draftFilters.searchMode === "standard" && (
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold">Multi Input</h3>
                  <ZipMultiInput />
                  <CityMultiInput />
                </div>
              )}

              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">Single Input</h3>
                <GroupSingleInput />
                {draftFilters.searchMode === "standard" && (
                  <StreetSingleInput />
                )}
                <RulingSingleInput />
                <TaxPeriodSingleInput />
                <CharityNameSingleInput />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">Numeric Ranges</h3>
                <IncomeAmountFilter />
                <AssetAmountFilter />
                <RevenueAmountFilter />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">Response Fields</h3>
                <FieldsFilter />
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Button type="button" onClick={applyFilters}>
                  Apply Filters
                </Button>
                <Button type="button" variant="outline" onClick={resetDraftToApplied}>
                  Reset Draft
                </Button>
                <Button type="button" variant="ghost" onClick={resetAll}>
                  Reset All
                </Button>
              </div>
            </div>
          </SheetWrapper>

          <div className="text-sm text-muted-foreground">
            {loading ? "Loading..." : `${totalCharities.toLocaleString()} results`}
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            disabled={loading || page === 1}
            onClick={() => setPage(1)}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            disabled={loading || page === 1}
            onClick={prevPage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="px-2 text-sm">
            {page} / {totalPages}
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            disabled={loading || page === totalPages}
            onClick={nextPage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            disabled={loading || page === totalPages}
            onClick={() => setPage(totalPages)}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="text-xs text-muted-foreground">
        Active sort: {appliedFilters.sortBy} ({appliedFilters.sortDir})
      </div>
    </div>
  );
}