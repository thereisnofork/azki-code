"use client";

import { FC, useState } from "react";
import Select, { TSelectOption } from "@/components/common/Select";
import { getVehicleModelsList, convertToSelectOptions } from "@/utils";
import { TVehicleApiData } from "@/service/types";
import { emptySelectValue } from "@/constants";
import { usePathname } from "next/navigation";
import BaseButton from "@/components/common/BaseButton";
import { ArrowSvg } from "@/components/icons";

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

  const pathname = usePathname();
  const basePath = pathname.endsWith("/") ? pathname : `${pathname}/`;

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

      <div className="flex items-center justify-between pt-4">
        <BaseButton
          href="../"
          startIcon={<ArrowSvg className="rotate-180" width={9} height={9} />}
          variant="outline"
        >
          مرحله قبل
        </BaseButton>

        <BaseButton
          href={`${basePath}/${slectedVehicleType.label}-${slectedVehicleModel.label}/previous-company`}
          disabled={!slectedVehicleModel.value}
          endIcon={<ArrowSvg width={9} height={9} />}
          variant="outline"
        >
          مرحله بعد
        </BaseButton>
      </div>
    </>
  );
};

export default ClientVehicleForm;
