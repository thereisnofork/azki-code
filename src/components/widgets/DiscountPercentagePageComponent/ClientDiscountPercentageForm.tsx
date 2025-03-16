"use client";

import { FC, useState } from "react";
import Select, { TSelectOption } from "@/components/common/Select";
import { convertToSelectOptions } from "@/utils";
import { TDiscountApiData } from "@/service/types";
import { emptySelectValue } from "@/constans";

interface IClientVehicleForm {
  discountDate: TDiscountApiData;
}

const ClientDiscountPercentageForm: FC<IClientVehicleForm> = ({
  discountDate,
}) => {
  const [slectedDiscountThird, setSlectedDiscountThird] =
    useState<TSelectOption>(emptySelectValue);

  const [slectedDiscountAccident, setSlectedDiscountAccident] =
    useState<TSelectOption>(emptySelectValue);

  const vehicleTypesList = convertToSelectOptions(discountDate);

  return (
    <>
      <Select
        label="درصد تخفیف ثالث"
        fullWidth
        options={vehicleTypesList}
        value={slectedDiscountThird.value}
        onChange={(e) => {
          setSlectedDiscountThird(e);
        }}
      />

      <Select
        label="درصد تخفیف خوادث راننده"
        fullWidth
        options={vehicleTypesList}
        value={slectedDiscountAccident.value}
        onChange={(e) => {
          setSlectedDiscountAccident(e);
        }}
      />
    </>
  );
};

export default ClientDiscountPercentageForm;
