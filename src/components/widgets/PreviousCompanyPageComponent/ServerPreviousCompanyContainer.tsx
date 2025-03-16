import { Suspense } from "react";
import SreverFetcherPreviousCompany from "./SreverFetcherPreviousCompany";

const ServerPreviousCompanyContainer = () => {
  return (
    <div className="text-center md:text-right md:pl-0 px-4 mt-4">
      <div className="text-lg font-semibold my-4">بیمه شخص ثالث</div>
      <div className="mb-6 mt-8 text-right">
        درصد تخفیف بیمه شخص ثالث و راننده را وارد
      </div>
      <div className="md:space-y-0 space-y-4">
        <Suspense fallback="loading.....">
          <SreverFetcherPreviousCompany />
        </Suspense>
      </div>
    </div>
  );
};

export default ServerPreviousCompanyContainer;
