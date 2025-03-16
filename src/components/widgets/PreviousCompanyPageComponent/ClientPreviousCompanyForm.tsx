"use client";

import { FC, useState } from "react";
import Select, { TSelectOption } from "@/components/common/Select";
import { convertToSelectOptions } from "@/utils";
import { TCompaniesApiData } from "@/service/types";
import { emptySelectValue } from "@/constans";

interface IClientVehicleForm {
  companiesDate: TCompaniesApiData;
}

const ClientPreviousCompanyForm: FC<IClientVehicleForm> = ({
  companiesDate,
}) => {
  const [slectedCompany, setSlectedCompany] =
    useState<TSelectOption>(emptySelectValue);

  const vehicleTypesList = convertToSelectOptions(companiesDate);

  return (
    <Select
      label="شرکت بیمه گر قبلی"
      fullWidth
      options={vehicleTypesList}
      value={slectedCompany.value}
      onChange={(e) => {
        setSlectedCompany(e);
      }}
    />
  );
};

export default ClientPreviousCompanyForm;
