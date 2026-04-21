import { fetchDeductibility } from "@/lib/actions/fetch-deductibility";
import { PfFilingFilter } from "./components/combo-boxes/single-select-boxes/pf-filing-box";
import { fetchPfFiling } from "@/lib/actions/fetch-pf-filing";
import { DeductibilityMultiFilter } from "./components/combo-boxes/multi-select-boxes/deductibility-box";
import { NteeCodeMultiFilter } from "./components/combo-boxes/multi-select-boxes/ntee-codes-box";
import { fetchNteeCodes } from "@/lib/actions/fetch-ntee-codes";
import { fetchNteeGroups } from "@/lib/actions/fetch-ntee-groups";
import { NteeGroupMultiFilter } from "./components/combo-boxes/multi-select-boxes/ntee-group-box";
import { fetchStatusCodes } from "@/lib/actions/fetch-status-codes";
import { StatusMultiFilter } from "./components/combo-boxes/multi-select-boxes/status-box";
import { fetchFoundationCodes } from "@/lib/actions/fetch-foundation-codes";
import { FoundationMultiFilter } from "./components/combo-boxes/multi-select-boxes/foundation-box";
import { fetchFilingReqCodes } from "@/lib/actions/fetch-filing-req-codes";
import { FilingReqMultiFilter } from "./components/combo-boxes/multi-select-boxes/filing-req-box";
import { fetchAffiliationCodes } from "@/lib/actions/fetch-affiliation-codes";
import { AffiliationMultiFilter } from "./components/combo-boxes/multi-select-boxes/affiliation-box";
import { fetchAccountPaid } from "@/lib/actions/fetch-account-paid";
import { AccountPaidMultiFilter } from "./components/combo-boxes/multi-select-boxes/account-paid-box";
import { fetchSubsectionClassification } from "@/lib/actions/fetch-subsection-class";
import { SubsectionClassificationFilter } from "./components/combo-boxes/special/subsection-classification-box";
import { StatesMultiFilter } from "./components/combo-boxes/multi-select-boxes/states-box";
import { states } from "@/lib/actions/states-json";
import { ZipMultiInput } from "./components/text-inputs/milti-input/zip-code-input";
import { CityMultiInput } from "./components/text-inputs/milti-input/city-input";
import { GroupSingleInput } from "./components/text-inputs/single-inputs/groups-input";
import { StreetSingleInput } from "./components/text-inputs/single-inputs/street-input";
import { RulingSingleInput } from "./components/text-inputs/single-inputs/ruling-input";
import { TaxPeriodSingleInput } from "./components/text-inputs/single-inputs/tax-period-input";
import { CharityNameSingleInput } from "./components/text-inputs/single-inputs/charity-name-input";
import { IncomeAmountFilter } from "./components/text-inputs/numerical-inputs/income-amt";
import { AssetAmountFilter } from "./components/text-inputs/numerical-inputs/asset-amt";
import { RevenueAmountFilter } from "./components/text-inputs/numerical-inputs/revenue-amt";
import { fetchOrganizationCodes } from "@/lib/actions/fetch-organization-codes";
import { OrganizationMultiFilter } from "./components/combo-boxes/multi-select-boxes/organization-box";
import { FieldsFilter } from "./components/combo-boxes/fields-multi-select-box/fields-filter-box";
import { SubmitButton } from "./components/submit-btn";
import { CharityDataTable } from "./table/charity-table";
import { CharityTableTopper } from "./table/charity-table-topper";



export async function HomeFetch() {
    const pfFilingOpts = await fetchPfFiling();
    const deductibilityOpts = await fetchDeductibility();
    const nteeCodeOpts = await fetchNteeCodes();
    const nteeGroupOpts = await fetchNteeGroups();
    const statusOpts = await fetchStatusCodes();
    const foundationOpts = await fetchFoundationCodes();
    const filingRequiredOpts = await fetchFilingReqCodes();
    const affiliationOpts = await fetchAffiliationCodes();
    const accountPaidOpts = await fetchAccountPaid();
    const subAndClassOpts = await fetchSubsectionClassification();
    const stateOpts = states
    const organizationOpts = await fetchOrganizationCodes();
    
    return (
        <div className="flex flex-col gap-4 p-8">
        {/* //     <div className="flex flex-col gap-4 border-b p-2">
        //         <h1>Single Filters</h1>
        //         <PfFilingFilter options={pfFilingOpts} />
        //         <SubsectionClassificationFilter options={subAndClassOpts} />
        //     </div>
        //     <div className="flex flex-col gap-4">
        //         <h1>Multi Select Filters</h1>
        //         <DeductibilityMultiFilter options={deductibilityOpts} />
        //         <NteeCodeMultiFilter options={nteeCodeOpts} />
        //         <NteeGroupMultiFilter options={nteeGroupOpts} />
        //         <StatusMultiFilter options={statusOpts} />
        //         <FoundationMultiFilter options={foundationOpts} />
        //         <FilingReqMultiFilter options={filingRequiredOpts} />
        //         <AffiliationMultiFilter options={affiliationOpts} />
        //         <AccountPaidMultiFilter options={accountPaidOpts} />
        //         <StatesMultiFilter options={stateOpts} />
        //         <OrganizationMultiFilter options={organizationOpts} />
        //     </div>
        //     <div className="flex flex-col gap-4">
        //         <h1>Multi Input Filters</h1>
        //         <ZipMultiInput />
        //         <CityMultiInput />
        //     </div>
        //     <div className="flex flex-col gap-4">
        //         <h1>Single Input Filters</h1>
        //         <GroupSingleInput />
        //         <StreetSingleInput />
        //         <RulingSingleInput />
        //         <TaxPeriodSingleInput />
        //         <CharityNameSingleInput />
        //     </div>
        //     <div className="flex flex-col gap-4">
        //         <h1>Numerical Input Filters</h1>
        //         <IncomeAmountFilter />
        //         <AssetAmountFilter />
        //         <RevenueAmountFilter />
        //     </div>
        //     <div className="flex flex-col gap-4">
        //         <h1>Fields Input (SQL Select)</h1>
        //         <FieldsFilter />
        //     </div>
        //     <div>
        //         <SubmitButton />
        //     </div> */}
            <div>
                <CharityTableTopper 
                pfFilingOpts={pfFilingOpts}
                deductibilityOpts={deductibilityOpts}
                nteeCodeOpts={nteeCodeOpts}
                nteeGroupOpts={nteeGroupOpts}
                statusOpts={statusOpts}
                foundationOpts={foundationOpts}
                filingRequiredOpts={filingRequiredOpts}
                affiliationOpts={affiliationOpts}
                accountPaidOpts={accountPaidOpts}
                subAndClassOpts={subAndClassOpts}
                stateOpts={stateOpts}
                organizationOpts={organizationOpts}
                />
                <CharityDataTable />
            </div>
        </div>
    )
}