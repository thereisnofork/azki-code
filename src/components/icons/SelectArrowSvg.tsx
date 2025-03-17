import { FC, SVGProps } from "react";

interface SelectArrowSvgProps extends SVGProps<SVGSVGElement> {
  open: boolean;
}

const SelectArrowSvg: FC<SelectArrowSvgProps> = ({ open, ...rest }) => (
  <svg
    className={`w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 transform transition-transform duration-200 ${
      open ? "rotate-180" : "rotate-0"
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    {...rest}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default SelectArrowSvg;
