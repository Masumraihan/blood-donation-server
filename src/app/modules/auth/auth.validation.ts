import { z } from "zod";
import { BloodTypes } from "./auth.constant";

const registerValidation = z.object({
  body: z.object({
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters" }),

    name: z.string({ required_error: "Name is required" }),
    email: z.string({ required_error: "Email is required" }).email({ message: "Invalid Email" }),
    bloodType: z.string({ required_error: "Blood type is required" }).refine(
      (val) => {
        return BloodTypes.includes(val);
      },
      {
        message: "Please provide a valid blood type (A_POSITIVE)",
      },
    ),
    age: z.number({ required_error: "Age is required" }),
    bio: z.string({ required_error: "Bio is required" }),
    location: z.string({ required_error: "Location is required" }),
    lastDonationDate: z.string({ required_error: "Last donation date is required" }),
  }),
});

export const AuthValidations = {
  registerValidation,
};
