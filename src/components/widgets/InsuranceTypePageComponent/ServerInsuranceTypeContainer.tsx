import { InsuranceCard } from "@/components/share";
import Link from "next/link";
import React from "react";

const ServerInsuranceTypeContainer = () => {
  return (
    <div className="text-center md:text-right md:pl-0 px-4 mt-4">
      <div className="text-lg font-semibold my-4">انتخاب بیمه</div>
      <div className="flex items-center justify-start gap-4">
        <Link href="./insurance-type/شخص ثالث/vehicle">
          <InsuranceCard title="شخص ثالث" />
        </Link>

        <InsuranceCard title="بدنه" disabled />
      </div>
    </div>
  );
};

export default ServerInsuranceTypeContainer;
