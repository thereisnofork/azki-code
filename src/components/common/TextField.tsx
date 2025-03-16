import React from "react";

type Variant = "standard" | "outlined" | "filled";

interface TextFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  variant?: Variant;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  type?: string;
  fullWidth?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  label,
  variant = "outlined",
  error = false,
  helperText,
  required,
  disabled,
  placeholder,
  type = "text",
  fullWidth = true,
}) => {
  const hasValue = value.length > 0;
  const isOutlined = variant === "outlined";
  const isFilled = variant === "filled";

  return (
    <div className={`relative  ${fullWidth ? "w-full" : ""}`} dir="rtl">
      <span
        className={`absolute right-2.5 transition-all duration-300 z-10  px-1 pointer-events-none ${
          hasValue ? "-top-2.5 text-sm bg-white" : "top-2"
        } peer-focus:(-top-2.5 text-sm) ${
          error ? "text-red-500" : "text-gray-500"
        } ${disabled ? "text-gray-400" : ""}`}
      >
        {label}
        {required && "*"}
      </span>
      <input
        autoComplete="off"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`px-3 py-2 outline-none transition-all text-right peer 
          ${fullWidth ? "w-full" : ""}
          ${
            isOutlined
              ? `border rounded-md ${
                  error ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-500`
              : ""
          }
          ${
            isFilled
              ? `bg-slate-100 rounded-md ${
                  error ? "border-red-500" : "border-transparent"
                } focus:border-blue-500`
              : ""
          }
          ${
            !isOutlined && !isFilled
              ? `border-b ${
                  error ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500`
              : ""
          }
          ${disabled ? "bg-gray-100 border-gray-300 cursor-not-allowed" : ""}
        `}
      />
      <span
        className={`block mt-1 min-h-4 text-xs text-right ${
          error ? "text-red-500" : "text-gray-500"
        }`}
      >
        {helperText}
      </span>
    </div>
  );
};
