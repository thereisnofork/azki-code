"use client";

import { Provider } from "jotai";
import React, { FC } from "react";
import { jotaiStore } from "./jotaiStore";

const JotaiProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <Provider store={jotaiStore}>{children}</Provider>;
};

export default JotaiProvider;
