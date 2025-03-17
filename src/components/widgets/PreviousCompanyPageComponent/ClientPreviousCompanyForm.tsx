"use client";

import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import Select, { TSelectOption } from "@/components/common/Select";
import { convertToSelectOptions } from "@/utils";
import { TCompaniesApiData } from "@/service/types";
import { emptySelectValue } from "@/constans";
import BaseButton from "@/components/common/BaseButton";
import { ArrowSvg } from "@/components/icons";

interface IClientVehicleForm {
  companiesDate: TCompaniesApiData;
}

const ClientPreviousCompanyForm: FC<IClientVehicleForm> = ({
  companiesDate,
}) => {
  const [slectedCompany, setSlectedCompany] =
    useState<TSelectOption>(emptySelectValue);
  const vehicleTypesList = convertToSelectOptions(companiesDate);
  const pathname = usePathname();
  const basePath = pathname.endsWith("/") ? pathname : `${pathname}/`;

  return (
    <>
      <Select
        label="شرکت بیمه گر قبلی"
        fullWidth
        options={vehicleTypesList}
        value={slectedCompany.value}
        onChange={(e) => {
          setSlectedCompany(e);
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
          href={`${basePath}/${slectedCompany.label}/discount-percentage`}
          disabled={!slectedCompany.value}
          endIcon={<ArrowSvg width={9} height={9} />}
          variant="outline"
        >
          مرحله بعد
        </BaseButton>
      </div>
    </>
  );
};

export default ClientPreviousCompanyForm;
