"use client";

import { fetchCharitiesAction } from "@/lib/actions/call-charity-api/fetch-charities";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CharityFilters = {
  pf_filing_req_code: string;
  foundation: string[];
  status: string[];
  filing_req_code: string[];
  affiliation: string[];
  organization: string[];
  subsection: string;
  classification: string;
  name: string;
  city: string[];
  state: string[];
  zip: string[];
  account_paid: string[];
  ntee_group: string[];
  ntee_code: string[];
  deductibility: string[];
  group: string;
  activity: string
  street: string;
  ruling: string;
  tax_period: string;
  asset_amount_gte?: number;
  asset_amount_lte?: number;
  income_amount_gte?: number;
  income_amount_lte?: number;
  revenue_amount_gte?: number;
  revenue_amount_lte?: number;
  fields: string[];
  sortBy: string;
  sortDir: "asc" | "desc";
  page: number;
  limit: number;
};

export const defaultFilters: CharityFilters = {
  pf_filing_req_code: "",
  foundation: [],
  status: [],
  organization: [],
  filing_req_code: [],
  affiliation: [],
  subsection: "",
  activity: "",
  classification: "",
  name: "",
  city: [],
  state: [],
  zip: [],
  account_paid: [],
  ntee_group: [],
  ntee_code: [],
  deductibility: [],
  group: "",
  street: "",
  ruling: "",
  tax_period: "",
  asset_amount_gte: undefined,
  asset_amount_lte: undefined,
  income_amount_gte: undefined,
  income_amount_lte: undefined,
  revenue_amount_gte: undefined,
  revenue_amount_lte: undefined,
  fields: ["ein", "name", "city", "state", "ntee_group"],
  sortBy: "name",
  sortDir: "asc",
  page: 1,
  limit: 25,
};

export type CharityTableRow = Record<string, unknown>;

interface CharityTableContextValue {
  draftFilters: CharityFilters;
  setDraftFilters: React.Dispatch<React.SetStateAction<CharityFilters>>;

  appliedFilters: CharityFilters;
  setAppliedFilters: React.Dispatch<React.SetStateAction<CharityFilters>>;

  charities: CharityTableRow[];
  setCharities: React.Dispatch<React.SetStateAction<CharityTableRow[]>>;

  totalCharities: number;
  setTotalCharities: React.Dispatch<React.SetStateAction<number>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  totalPages: number;

  applyFilters: () => void;
  resetDraftToApplied: () => void;
  resetAll: () => void;

  page: number;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

const CharityTableContextInternal = createContext<CharityTableContextValue | undefined>(
  undefined
);

export function CharityTableContext({
  children,
  charities: initialCharities,
  totalCharities: initialTotalCharities,
}: {
  children: ReactNode;
  charities: CharityTableRow[];
  totalCharities: number;
}) {
  const [draftFilters, setDraftFilters] = useState<CharityFilters>(defaultFilters);
  const [appliedFilters, setAppliedFilters] = useState<CharityFilters>(defaultFilters);

  const [charities, setCharities] = useState<CharityTableRow[]>(initialCharities);
  const [totalCharities, setTotalCharities] = useState<number>(initialTotalCharities);
  const [loading, setLoading] = useState<boolean>(false);

  const totalPages = Math.max(1, Math.ceil(totalCharities / appliedFilters.limit))

    const applyFilters = useCallback(() => {
    setAppliedFilters({
      ...draftFilters,
      page: 1,
    });

    setDraftFilters((prev) => ({
      ...prev,
      page: 1,
    }));
  }, [draftFilters]);

  const resetDraftToApplied = useCallback(() => {
    setDraftFilters(appliedFilters);
  }, [appliedFilters]);

  const resetAll = useCallback(() => {
    setDraftFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
  }, []);

    const setPage = useCallback(
    (page: number) => {
      const clamped = Math.max(1, Math.min(page, totalPages));

      setAppliedFilters((prev) => ({
        ...prev,
        page: clamped,
      }));

      setDraftFilters((prev) => ({
        ...prev,
        page: clamped,
      }));
    },
    [totalPages]
  );

  const nextPage = useCallback(() => {
    setPage(appliedFilters.page + 1);
  }, [appliedFilters.page, setPage]);

  const prevPage = useCallback(() => {
    setPage(appliedFilters.page - 1);
  }, [appliedFilters.page, setPage]);

    const value = useMemo<CharityTableContextValue>(
    () => ({
      draftFilters,
      setDraftFilters,

      appliedFilters,
      setAppliedFilters,

      charities,
      setCharities,

      totalCharities,
      setTotalCharities,

      loading,
      setLoading,

      page: appliedFilters.page,
      totalPages,

      applyFilters,
      resetDraftToApplied,
      resetAll,

      setPage,
      nextPage,
      prevPage,
    }),
    [
      draftFilters,
      appliedFilters,
      charities,
      totalCharities,
      loading,
      totalPages,
      applyFilters,
      resetDraftToApplied,
      resetAll,
      setPage,
      nextPage,
      prevPage,
    ]
  );

  useEffect(() => {
  let isMounted = true;

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await fetchCharitiesAction(appliedFilters);

      if (!isMounted) return;

      setCharities(res.charities);
      setTotalCharities(res.total);
    } catch (err) {
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  };

  fetchData();

  return () => {
    isMounted = false;
  };
}, [appliedFilters]);

  return (
    <CharityTableContextInternal.Provider value={value}>
      {children}
    </CharityTableContextInternal.Provider>
  );
}

export function useCharityTableContext() {
  const context = useContext(CharityTableContextInternal);

  if (!context) {
    throw new Error("useCharityTableContext must be used inside CharityTableContext");
  }

  return context;
}