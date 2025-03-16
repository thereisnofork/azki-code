import { thirdCompaniesUrl, thirdDiscountsUrl, vehicleUrl } from "./api-urls";

export const fetchVehicle = () =>
  fetch(vehicleUrl, { next: { revalidate: 400 } });

export const fetchCompanies = () =>
  fetch(thirdCompaniesUrl, { next: { revalidate: 400 } });

export const fetchDiscounts = () =>
  fetch(thirdDiscountsUrl, { next: { revalidate: 400 } });
