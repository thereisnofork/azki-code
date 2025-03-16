"use client";

import BaseTextField from "@/components/common/BaseTextField";
import { schema, TSchema } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const SignUpPage = () => {
  const { control, handleSubmit } = useForm<TSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<TSchema> = (values) => {
    const { first_name, last_name, phone_number } = values;
  };

  return (
    <div className="text-center md:text-right px-4 mt-4">
      <div className="text-lg font-semibold my-4">ثبت نام</div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        <div className="block md:flex items-start justify-between gap-4 md:space-y-0 space-y-4">
          <BaseTextField name="first_name" control={control} label="نام" />
          <BaseTextField
            name="last_name"
            control={control}
            label="نام خانوادگی"
          />
        </div>

        <BaseTextField
          name="phone_number"
          control={control}
          label="شماره موبایل"
        />
        <BaseTextField name="password" control={control} label="رمز عبور" />
        <div className="flex justify-center md:justify-end">
          <button
            type="submit"
            className="bg-[#25b79A] text-white px-4 py-2 rounded-full"
          >
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
