import React from "react";

interface SubmitResultCardProps {
  insuranceType: string;
  vehicle: string;
  previousCompany: string;
  selectedDiscountThirdLabel: string;
  selectedDiscountAccidentLabel: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | number;
}

const SubmitResultCard: React.FC<SubmitResultCardProps> = ({
  insuranceType,
  vehicle,
  previousCompany,
  selectedDiscountThirdLabel,
  selectedDiscountAccidentLabel,
  firstName,
  lastName,
  phoneNumber,
}) => {
  return (
    <div className="mb-4 max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
          مشخصات سفارش
        </h2>
        <div className="mt-3 space-y-2 text-gray-600">
          <p>
            <span className="font-medium text-gray-800">نوع بیمه:</span>
            {insuranceType}
          </p>
          <p>
            <span className="font-medium text-gray-800">نوع و مدل خودرو:</span>
            {vehicle}
          </p>
          <p>
            <span className="font-medium text-gray-800">
              شرکت بیمه‌گر قبلی:
            </span>
            {previousCompany}
          </p>
          <p>
            <span className="font-medium text-gray-800">درصد تخفیف ثالث:</span>
            {selectedDiscountThirdLabel}
          </p>
          <p>
            <span className="font-medium text-gray-800">
              درصد تخفیف حوادث راننده:
            </span>
            {selectedDiscountAccidentLabel}
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
          مشخصات کاربر
        </h2>
        <div className="mt-3 space-y-2 text-gray-600">
          <p>
            <span className="font-medium text-gray-800">نام:</span> {firstName}
          </p>
          <p>
            <span className="font-medium text-gray-800">نام خانوادگی:</span>
            {lastName}
          </p>
          <p>
            <span className="font-medium text-gray-800">شماره تماس:</span>
            {phoneNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmitResultCard;
