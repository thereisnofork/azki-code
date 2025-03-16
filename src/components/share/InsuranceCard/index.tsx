import { FC } from "react";
import InsuranceSvg from "@/components/icons/InsuranceSvg";

type TInsuranceCard = { title: string; disabled?: boolean };

const InsuranceCard: FC<TInsuranceCard> = ({ title, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`flex flex-col items-center justify-center size-24 gap-3 rounded-lg border border-gray-300 ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <InsuranceSvg height={40} width={40} fill={disabled ? "gray" : "black"} />
      <div
        className={`select-none text-center ${
          disabled ? "text-gray-400" : "black"
        }`}
      >
        {title}
      </div>
    </button>
  );
};

export default InsuranceCard;
