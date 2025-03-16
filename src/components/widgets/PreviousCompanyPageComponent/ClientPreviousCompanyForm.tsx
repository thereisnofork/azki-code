"use client";

import { FC, useState } from "react";
import Select, { TSelectOption } from "@/components/common/Select";
import { getComponiesList } from "@/utils";
import { TVehicleApiData } from "@/service/types";
import { emptySelectValue } from "@/constans";

interface IClientVehicleForm {
  companiesDate: TVehicleApiData;
}

const ClientPreviousCompanyForm: FC<IClientVehicleForm> = ({
  companiesDate,
}) => {
  console.log("🚀 companiesDate:", companiesDate);
  const [slectedVehicleType, setSlectedVehicleType] =
    useState<TSelectOption>(emptySelectValue);

  const vehicleTypesList = getComponiesList(companiesDate);
  console.log("🚀 vehicleTypesList:", vehicleTypesList);

  return (
    <>
      <Select
        label="شرکت بیمه گر قبلی"
        fullWidth
        options={vehicleTypesList}
        value={slectedVehicleType.value}
        onChange={(e) => {
          setSlectedVehicleType(e);
        }}
      />
    </>
  );
};

export default ClientPreviousCompanyForm;
