import { fetchDeductibility } from "@/lib/actions/fetch-deductibility";
import { fetchPfFiling } from "@/lib/actions/fetch-pf-filing";
import { fetchNteeCodes } from "@/lib/actions/fetch-ntee-codes";
import { fetchNteeGroups } from "@/lib/actions/fetch-ntee-groups";
import { fetchStatusCodes } from "@/lib/actions/fetch-status-codes";
import { fetchFoundationCodes } from "@/lib/actions/fetch-foundation-codes";
import { fetchFilingReqCodes } from "@/lib/actions/fetch-filing-req-codes";
import { fetchAffiliationCodes } from "@/lib/actions/fetch-affiliation-codes";
import { fetchAccountPaid } from "@/lib/actions/fetch-account-paid";
import { fetchSubsectionClassification } from "@/lib/actions/fetch-subsection-class";
import { states } from "@/lib/actions/states-json";
import { fetchOrganizationCodes } from "@/lib/actions/fetch-organization-codes";
import { CharityDataTable } from "./table/charity-table";
import { CharityTableTopper } from "./table/charity-table-topper";
import { fetchGeocodeStatusCodes } from "@/lib/actions/fetch-geocode-status";



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
    const geocodeStatusOpts = await fetchGeocodeStatusCodes();
    
    return (
        <div className="flex flex-col gap-4 p-8">
        
            <div>
                <CharityTableTopper 
                geocodeStatusOpts={geocodeStatusOpts}
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