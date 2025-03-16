import { TSelectOption } from "@/components/common/Select";
import { TVehicleApiData } from "@/service/types";

const getVehicleModelsList = (
  vehicles?: TVehicleApiData,
  vehicleTitle?: string
): TSelectOption[] => {
  const vehicle = vehicles?.find((v) => v.title === vehicleTitle);
  return vehicle
    ? vehicle.usages.map((u) => ({ value: u.id.toString(), label: u.title }))
    : [];
};

export default getVehicleModelsList;
