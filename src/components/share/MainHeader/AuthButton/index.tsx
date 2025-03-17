"use client";

import { UserSvg } from "@/components/icons";
import { userProfileAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import React from "react";

const AuthButton = () => {
  const [userProfile] = useAtom(userProfileAtom);

  return (
    <button className="">
      {userProfile ? (
        <div className="flex item-center justify-center gap-2  ">
          <UserSvg className=" size-5" />
          <div className="">
            {userProfile.firstName} {userProfile.lastName}
          </div>
        </div>
      ) : (
        "ثبت نام"
      )}
    </button>
  );
};

export default AuthButton;
