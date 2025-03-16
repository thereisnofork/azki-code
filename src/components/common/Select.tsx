"use client";
import { useState } from "react";
import ClickOutsideListener from "./ClickOutsideListener";

type Option = { label: string; value: string };

type SelectProps = {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
};

export default function Select({
  label,
  options,
  value,
  onChange,
  fullWidth = false,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <ClickOutsideListener onClickOutside={() => setOpen(false)}>
      <div className={`relative text-right ${fullWidth ? "w-full" : "w-40"}`}>
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className={`w-full px-4 py-3 border rounded bg-white flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              open ? "border-blue-500 text-blue-500" : "border-gray-300"
            }`}
          >
            <span className="block">{selected?.label || ""}</span>
            <svg
              className={`w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 transform transition-transform duration-200 ${
                open ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
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
        {open && (
          <div
            className={`absolute left-0 mt-1 bg-white border rounded shadow z-10 ${
              fullWidth ? "w-full" : "w-40"
            }`}
          >
            {options.map((opt) => (
              <div
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
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
