"use client";

import Select from "@/components/common/Select";
import { useState } from "react";

const ClientVehicleForm = () => {
  const [slectedVehicle, setSlectedVehicle] = useState<string>("");

  return (
    <>
      <Select
        label="نوع خودرو"
        fullWidth
        options={[{ label: "string", value: "string" }]}
        value={slectedVehicle}
        onChange={(e) => {
          setSlectedVehicle(e);
        }}
      />
      <Select
        label="مدل خودرو"
        fullWidth
        options={[{ label: "string", value: "string" }]}
        value={slectedVehicle}
        onChange={(e) => {
          setSlectedVehicle(e);
        }}
      />
    </>
  );
};

export default ClientVehicleForm;
