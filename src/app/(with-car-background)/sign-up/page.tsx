"use client";

import BaseTextField from "@/components/common/BaseTextField";
import { userProfileAtom } from "@/store/atoms";
import { schema, TSchema } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const SignUpPage = () => {
  const { control, handleSubmit } = useForm<TSchema>({
    resolver: zodResolver(schema),
  });
  const [userProfile, setUserProfile] = useAtom(userProfileAtom);
  const router = useRouter();

  const onSubmit: SubmitHandler<TSchema> = (values) => {
    setUserProfile(values);
    router.push("./order/insurance/insurance-type");
  };

  return (
    <div className="text-center md:text-right px-4 mt-4">
      <div className="text-lg font-semibold my-4">ثبت نام</div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        <div className="block md:flex items-start justify-between gap-4 md:space-y-0 space-y-4">
          <BaseTextField name="firstName" control={control} label="نام" />
          <BaseTextField
            name="lastName"
            control={control}
            label="نام خانوادگی"
          />
        </div>

        <BaseTextField
          name="phoneNumber"
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
