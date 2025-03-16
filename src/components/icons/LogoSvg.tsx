import { FC, SVGProps } from "react";

const LogoSvg: FC<SVGProps<SVGSVGElement>> = ({
  stroke = "#25B79B",
  strokeWidth = 2,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 17"
      width={17}
      height={17}
      {...rest}
    >
      <title>logo</title>
      <rect
        x={1}
        y={1}
        width={15}
        height={15}
        rx={2}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <line
        x1={5}
        y1={6}
        x2={5}
        y2={10.4147}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LogoSvg;
