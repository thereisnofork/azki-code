import { TSelectOption } from "@/components/common/Select";
import { TCompaniesApiData } from "@/service/types";

const getComponiesList = (data: TCompaniesApiData): TSelectOption[] =>
  data.map((item) => ({
    value: item.id.toString(),
    label: item.title,
  }));

export default getComponiesList;
