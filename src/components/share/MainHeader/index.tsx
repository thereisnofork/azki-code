import React from "react";
import AuthButton from "./AuthButton";
import { LogoSvg } from "@/components/icons";

const MainHeader = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <header className="max-w-[1000px] flex mx-auto flex-col min-h-screen">
      <div className="flex items-center justify-between h-16 relative z-20 px-5">
        <LogoSvg />
        <div className="hidden md:block">سامانه مقایسه و خرید آنلاین بیمه</div>
        <AuthButton />
      </div>
      {children}
    </header>
  );
};

export default MainHeader;
