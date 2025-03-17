import { z } from "zod";

const persianAlphaRegex = /^[\u0600-\u06FF\u0750-\u077F]+$/;

export const schema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "نام خود را وارد کنید")
    .regex(persianAlphaRegex, "نام باید با حروف فارسی باشد"),

  lastName: z
    .string()
    .trim()
    .min(1, "نام خانوادگی خود را وارد کنید")
    .regex(persianAlphaRegex, "نام خانوادگی باید با حروف فارسی باشد"),

  phoneNumber: z
    .string()
    .trim()
    .min(1, "شماره موبایل خود را وارد کنید")
    .regex(/^09\d{9}$/, "شماره موبایل باید با 09 شروع شود و 11 رقم داشته باشد"),

  password: z
    .string()
    .trim()
    .min(1, "رمز عبور خود را وارد کنید")
    .min(4, "رمز عبور باید حداقل 4 کاراکتر داشته باشد")
    .max(8, "رمز عبور نمی تواند بیشتر از 8 کاراکتر باشد")
    .regex(/^[a-zA-Z0-9]+$/, "فقط کاراکترهای الفبای انگلیسی و اعداد مجازند")
    .regex(/[A-Z]/, "حداقل یک حرف بزرگ انگلیسی مورد نیاز است")
    .regex(/[a-z]/, "حداقل یک حرف کوچک انگلیسی مورد نیاز است")
    .regex(/\d/, "حداقل یک عدد مورد نیاز است"),
});

export type TSchema = z.infer<typeof schema>;
