import { TSelectOption } from "@/components/common/Select";
import {
  TCompaniesApiData,
  TDiscountApiData,
  TVehicleApiData,
} from "@/service/types";

const convertToSelectOptions = (
  data: TCompaniesApiData | TDiscountApiData | TVehicleApiData
): TSelectOption[] =>
  data.map((item) => ({
    value: item.id.toString(),
    label: item.title,
  }));

export default convertToSelectOptions;
