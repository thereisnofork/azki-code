"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { schema, TSchema } from "@/utils";
import BaseButton from "@/components/common/BaseButton";
import BaseTextField from "@/components/common/BaseTextField";
import { userProfileAtom } from "@/store/atoms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { useForm, SubmitHandler } from "react-hook-form";

const ClientSignUpForm: FC = () => {
  const { control, handleSubmit } = useForm<TSchema>({
    resolver: zodResolver(schema),
  });
  const [, setUserProfile] = useAtom(userProfileAtom);
  const router = useRouter();

  const onSubmit: SubmitHandler<TSchema> = (values) => {
    setUserProfile(values);
    router.push("./order/insurance-type");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <div className="block md:flex items-start justify-between gap-4 md:space-y-0 space-y-4">
        <BaseTextField name="firstName" control={control} label="نام" />
        <BaseTextField name="lastName" control={control} label="نام خانوادگی" />
      </div>

      <BaseTextField
        name="phoneNumber"
        control={control}
        label="شماره موبایل"
      />

      <BaseTextField name="password" control={control} label="رمز عبور" />
      <div className="flex justify-center md:justify-end">
        <BaseButton type="submit">ثبت نام</BaseButton>
      </div>
    </form>
  );
};

export default ClientSignUpForm;
