import React from "react";
import ClientVehicleForm from "./ClientVehicleForm";
import { fetchVehicle } from "@/service/fetchers";

const SreverFetcherVehicle = async () => {
  let vehicleDate = null;
  try {
    const vehicleResponse = await fetchVehicle();
    vehicleDate = await vehicleResponse.json();
  } catch (error) {
    console.log("🚀 SreverFetcherVehicle error:", error);
    throw error;
  }

  return <ClientVehicleForm vehicleDate={vehicleDate} />;
};

export default SreverFetcherVehicle;
