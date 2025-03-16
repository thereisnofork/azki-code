"use client";

import { FC } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { TextField } from "./TextField";

type IBaseTextField = {
  control: Control<FieldValues>;
  name: string;
  fullWidth?: boolean;
  label: string;
  type?: string;
};

const BaseTextField: FC<IBaseTextField> = ({
  control,
  label,
  name,
  fullWidth = true,
  type = "text",
}) => {
  const isPassword = name.includes("password") || type === "password";
  const textFieldType = isPassword ? "password" : "text";

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={(p) => (
        <TextField
          type={textFieldType}
          {...p.field}
          fullWidth={fullWidth}
          label={label}
          error={!!p.fieldState.error}
          helperText={p.fieldState.error?.message}
        />
      )}
    />
  );
};

export default BaseTextField;
