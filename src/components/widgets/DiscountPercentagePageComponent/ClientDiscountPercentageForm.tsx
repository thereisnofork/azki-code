"use client";

import { FC, useState } from "react";
import Select, { TSelectOption } from "@/components/common/Select";
import { convertToSelectOptions, decodeURIComponentSafe } from "@/utils";
import { TDiscountApiData } from "@/service/types";
import { emptySelectValue } from "@/constans";
import { useParams } from "next/navigation";
import BaseButton from "@/components/common/BaseButton";
import BaseModal from "@/components/common/BaseModal";
import { userProfileAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import SubmitResultCard from "./SubmitResultCard";

interface IClientVehicleForm {
  discountDate: TDiscountApiData;
}

const ClientDiscountPercentageForm: FC<IClientVehicleForm> = ({
  discountDate,
}) => {
  const [submitModalValues, setSubmitModalValues] = useState<object | null>(
    null
  );
  const [selectedDiscountThird, setSelectedDiscountThird] =
    useState<TSelectOption>(emptySelectValue);
  const [selectedDiscountAccident, setSelectedDiscountAccident] =
    useState<TSelectOption>(emptySelectValue);

  const vehicleTypesList = convertToSelectOptions(discountDate);

  const [userProfile] = useAtom(userProfileAtom);

  const params = useParams();

  const {
    "insurance-type": insuranceTypeParam = "",
    "previous-company": previousCompanyParam = "",
    vehicle: vehicleParam = "",
  } = params ?? {};

  const { firstName = "", lastName = "", phoneNumber = "" } = userProfile ?? {};

  const insuranceType = decodeURIComponentSafe(insuranceTypeParam);
  const previousCompany = decodeURIComponentSafe(previousCompanyParam);
  const vehicle = decodeURIComponentSafe(vehicleParam);

  const openSubmitModal = () => {
    setSubmitModalValues({});
  };
  const closeSubmitModal = () => {
    setSubmitModalValues(null);
  };

  return (
    <>
      <Select
        label="درصد تخفیف ثالث"
        fullWidth
        options={vehicleTypesList}
        value={selectedDiscountThird.value}
        onChange={(e) => {
          setSelectedDiscountThird(e);
        }}
      />

      <Select
        label="درصد تخفیف حوادث راننده"
        fullWidth
        options={vehicleTypesList}
        value={selectedDiscountAccident.value}
        onChange={(e) => {
          setSelectedDiscountAccident(e);
        }}
      />

      <BaseModal isOpen={!!submitModalValues} onClose={closeSubmitModal}>
        <SubmitResultCard
          insuranceType={insuranceType}
          vehicle={vehicle}
          previousCompany={previousCompany}
          selectedDiscountThirdLabel={selectedDiscountThird.label}
          selectedDiscountAccidentLabel={selectedDiscountAccident.label}
          firstName={firstName}
          lastName={lastName}
          phoneNumber={phoneNumber}
        />
      </BaseModal>

      <div className="flex justify-center md:justify-end">
        <BaseButton
          onClick={openSubmitModal}
          disabled={
            !selectedDiscountAccident.value || !selectedDiscountThird.value
          }
        >
          استعلام قیمت
        </BaseButton>
      </div>
    </>
  );
};

export default ClientDiscountPercentageForm;
