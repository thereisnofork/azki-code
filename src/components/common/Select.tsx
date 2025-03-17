"use client";
import { useState } from "react";
import ClickOutsideListener from "./ClickOutsideListener";
import { SelectArrowSvg } from "../icons";

export type TSelectOption = { label: string; value: string };

type SelectProps = {
  label: string;
  options: TSelectOption[];
  value: string;
  onChange: (arg: TSelectOption) => void;
  fullWidth?: boolean;
  disabled?: boolean;
};

export default function Select({
  label,
  options,
  value,
  onChange,
  fullWidth = false,
  disabled = false,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <ClickOutsideListener onClickOutside={() => setOpen(false)}>
      <div className={`relative text-right ${fullWidth ? "w-full" : "w-40"}`}>
        <div className="relative">
          <button
            disabled={disabled}
            onClick={() => {
              if (!disabled) {
                setOpen(!open);
              }
            }}
            className={`w-full px-4 py-3 border rounded bg-white flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              open ? "border-blue-500 text-blue-500" : "border-gray-300"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <span className="block">{selected?.label || ""}</span>
            <SelectArrowSvg open={open} />
          </button>
          <label
            className={`absolute transition-all duration-200 pointer-events-none ${
              selected || open
                ? "text-xs -top-2 bg-white px-1 text-blue-500"
                : "text-sm top-3 text-gray-500"
            } rtl:right-4 rtl:left-auto`}
          >
            {label}
          </label>
        </div>
        {open && !disabled && (
          <div
            className={`absolute left-0 mt-1 max-h-[30vh] overflow-y-auto bg-white border rounded shadow z-10 ${
              fullWidth ? "w-full" : "w-40"
            }`}
          >
            {options.map((opt) => (
              <div
                key={opt.value}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {opt.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </ClickOutsideListener>
  );
}
