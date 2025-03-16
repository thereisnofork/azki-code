import { TSelectOption } from "@/components/common/Select";
import { TVehicleApiData } from "@/service/types";

const getVehicleTypesList = (data: TVehicleApiData): TSelectOption[] =>
  data.map((item) => ({
    value: item.id.toString(),
    label: item.title,
  }));

export default getVehicleTypesList;
