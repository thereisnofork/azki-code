import React from "react";
import ClientPreviousCompanyForm from "./ClientPreviousCompanyForm";
import { fetchCompanies } from "@/service/fetchers";

const SreverFetcherPreviousCompany = async () => {
  let companiesDate = null;
  try {
    const companiesResponse = await fetchCompanies();
    companiesDate = await companiesResponse.json();
  } catch (error) {
    console.log("🚀 SreverFetcherPreviousCompany error:", error);
    throw error;
  }

  return <ClientPreviousCompanyForm companiesDate={companiesDate} />;
};

export default SreverFetcherPreviousCompany;
