import { z } from "zod";
import { BloodTypes } from "../auth/auth.constant";
// all filed should be optional

const updateProfile = z.object({
  body: z
    .object({
      name: z.string(),
      email: z.string().email({ message: "Invalid Email" }),
      bloodType: z.string().refine(
        (val) => {
          return BloodTypes.includes(val);
        },
        {
          message: "Please provide a valid blood type (A_POSITIVE)",
        },
      ),
      age: z.number(),
      bio: z.string(),
      location: z.string(),
      lastDonationDate: z.string(),
    })
    .partial()
    .strict(),
});

const updateUser = z.object({
  body: z
    .object({
      status: z.enum(["ACTIVE", "DEACTIVATE"]),
      role: z.enum(["ADMIN", "DONOR"]),
    })
    .partial()
    .strict(),
});

export const UserValidation = { updateProfile, updateUser };