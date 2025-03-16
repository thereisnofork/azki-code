"use client";

import Select from "@/components/common/Select";
import React, { useState } from "react";

const PreviousCompanyPage = () => {
  const [slectedVehicle, setslectedVehicle] = useState<string>("");
  return (
    <div className="text-center md:text-right md:pl-0 px-4 mt-4">
      <div className="text-lg font-semibold my-4">بیمه شخص ثالث</div>
      <div className="mb-6 mt-8 text-right">
        درصد تخفیف بیمه شخص ثالث و راننده را وارد
      </div>
      <div className="md:space-y-0 space-y-4">
        <Select
          label="شرکت بیمه گر قبلی"
          fullWidth
          options={[{ label: "string", value: "string" }]}
          value={slectedVehicle}
          onChange={(e) => {
            setslectedVehicle(e);
          }}
        />
      </div>
    </div>
  );
};

export default PreviousCompanyPage;
