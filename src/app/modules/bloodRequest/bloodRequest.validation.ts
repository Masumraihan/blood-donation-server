import { RequestStatus } from "@prisma/client";
import { z } from "zod";

const createBloodRequestValidation = z.object({
  body: z.object({
    donorId: z.string({ required_error: "Donor is required" }),
    phoneNumber: z.string({ required_error: "Phone Number is required" }),
    dateOfDonation: z.string({ required_error: "Date of Donation is required" }),
    hospitalName: z.string({ required_error: "Hospital Name is required" }),
    hospitalAddress: z.string({ required_error: "Hospital Address is required" }),
    reason: z.string({ required_error: "Reason is required" }),
  }),
});

const updateBloodRequestStatusValidation = z.object({
  body: z.object({
    requestStatus: z.enum(["PENDING", "APPROVED", "REJECTED"]),
  }),
});

export const BloodRequestValidations = {
  createBloodRequestValidation,
  updateBloodRequestStatusValidation,
};
