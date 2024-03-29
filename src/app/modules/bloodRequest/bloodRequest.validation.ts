import { z } from "zod";

const createBloodRequestValidation = z.object({
  body: z.object({
    phoneNumber: z.string({ required_error: "Phone Number is required" }),
    dateOfDonation: z.string({ required_error: "Date of Donation is required" }),
    hospitalName: z.string({ required_error: "Hospital Name is required" }),
    reason: z.string({ required_error: "Reason is required" }),
  }),
});
