"use client";

import { FC, useState } from "react";
import Select, { TSelectOption } from "@/components/common/Select";
import { getVehicleModelsList, getVehicleTypesList } from "@/utils";
import { TVehicleApiData } from "@/service/types";

interface IClientVehicleForm {
  vehicleDate: TVehicleApiData;
}

const empitySelectValue = {
  value: "",
  label: "",
};

const ClientVehicleForm: FC<IClientVehicleForm> = ({ vehicleDate }) => {
  const [slectedVehicleType, setSlectedVehicleType] =
    useState<TSelectOption>(empitySelectValue);
  const [slectedVehicleModel, setSlectedVehicleModel] =
    useState<TSelectOption>(empitySelectValue);

  const vehicleTypesList = getVehicleTypesList(vehicleDate);
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
          setSlectedVehicleModel(empitySelectValue);
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
