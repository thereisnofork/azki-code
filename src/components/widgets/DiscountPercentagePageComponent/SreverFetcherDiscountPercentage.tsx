import React from "react";
import ClientDiscountPercentageForm from "./ClientDiscountPercentageForm";
import { fetchDiscounts } from "@/service/fetchers";

const SreverFetcherDiscountPercentage = async () => {
  let discountDate = null;
  try {
    const companiesResponse = await fetchDiscounts();
    discountDate = await companiesResponse.json();
  } catch (error) {
    console.log("🚀 SreverFetcherDiscountPercentage error:", error);
    throw error;
  }

  return <ClientDiscountPercentageForm discountDate={discountDate} />;
};

export default SreverFetcherDiscountPercentage;
