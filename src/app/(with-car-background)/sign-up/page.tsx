"use client";

import BaseButton from "@/components/common/BaseButton";
import BaseTextField from "@/components/common/BaseTextField";
import { ServerSignUpContainer } from "@/components/widgets";
import { userProfileAtom } from "@/store/atoms";
import { schema, TSchema } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpPage = () => {
  return <ServerSignUpContainer />;
};

export default SignUpPage;
