import React from "react";
import Link from "next/link";

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "filled" | "outline";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  href?: string;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  disabled,
  className = "",
  variant = "filled",
  startIcon,
  endIcon,
  href = "#",
  ...props
}) => {
  const baseClasses =
    "py-2 px-4 rounded-full shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25b79A]";

  const filledClasses =
    "bg-[#25b79A] text-white hover:brightness-110 active:brightness-95";
  const outlineClasses =
    "bg-transparent border-2 border-[#25b79A] text-[#25b79A] hover:bg-[#25b79A] hover:text-white";

  const filledDisabledClasses =
    "bg-[#25b79A] text-white opacity-50 cursor-not-allowed";
  const outlineDisabledClasses =
    "bg-transparent border-2 border-[#25b79A] text-[#25b79A] opacity-50 cursor-not-allowed";

  const variantClasses = disabled
    ? variant === "outline"
      ? outlineDisabledClasses
      : filledDisabledClasses
    : variant === "outline"
    ? outlineClasses
    : filledClasses;

  const buttonContent = (
    <span className="flex justify-center items-center gap-2">
      {startIcon && <span>{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span>{endIcon}</span>}
    </span>
  );

  if (!disabled && href && href !== "#") {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      {...props}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {buttonContent}
    </button>
  );
};

export default BaseButton;
