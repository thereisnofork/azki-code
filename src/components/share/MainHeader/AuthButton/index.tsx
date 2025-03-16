import { UserSvg } from "@/components/icons";
import React from "react";

const AuthButton = () => {
  const isAuth = true;
  return (
    <button className="">
      {isAuth ? (
        <div className="flex item-center justify-center gap-2  ">
          <UserSvg className=" size-5" />
          <div className="">jhon doe</div>
        </div>
      ) : (
        "ثبت نام"
      )}
    </button>
  );
};

export default AuthButton;
