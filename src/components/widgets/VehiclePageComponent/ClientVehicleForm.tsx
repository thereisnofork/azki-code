"use client";

import { FC, useState } from "react";
import Select, { TSelectOption } from "@/components/common/Select";
import { getVehicleModelsList, convertToSelectOptions } from "@/utils";
import { TVehicleApiData } from "@/service/types";
import { emptySelectValue } from "@/constans";

interface IClientVehicleForm {
  vehicleDate: TVehicleApiData;
}

const ClientVehicleForm: FC<IClientVehicleForm> = ({ vehicleDate }) => {
  const [slectedVehicleType, setSlectedVehicleType] =
    useState<TSelectOption>(emptySelectValue);
  const [slectedVehicleModel, setSlectedVehicleModel] =
    useState<TSelectOption>(emptySelectValue);

  const vehicleTypesList = convertToSelectOptions(vehicleDate);
  const vehicleModelsList = getVehicleModelsList(
    vehicleDate,
    slectedVehicleType.label
  );

  return (
    <>
      <Select
        label="نوع خودرو"
        fullWidth
        options={vehicleTypesList}
        value={slectedVehicleType.value}
        onChange={(e) => {
          setSlectedVehicleType(e);
          setSlectedVehicleModel(emptySelectValue);
        }}
      />
      <Select
        label="مدل خودرو"
        disabled={!slectedVehicleType.value}
        fullWidth
        options={vehicleModelsList}
        value={slectedVehicleModel.value}
        onChange={(e) => {
          setSlectedVehicleModel(e);
        }}
      />
    </>
  );
};

export default ClientVehicleForm;
