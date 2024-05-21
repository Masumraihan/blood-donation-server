import express from "express";
import { BloodRequestControllers } from "./bloodRequest.controller";
import auth from "../../../middleware/auth";
import validateRequest from "../../../middleware/validateRequest";
import { BloodRequestValidations } from "./bloodRequest.validation";

const router = express.Router();

router.post(
  "/donation-request",
  auth(),
  validateRequest(BloodRequestValidations.createBloodRequestValidation),
  BloodRequestControllers.createBloodRequest,
);

router.get("/donation-request", auth(), BloodRequestControllers.getMyDonations);
router.get("/my-request", auth(), BloodRequestControllers.getMyRequests);
router.put(
  "/donation-request/:requestId",
  auth(),
  validateRequest(BloodRequestValidations.updateBloodRequestStatusValidation),
  BloodRequestControllers.updateBloodRequestStatus,
);

export const BloodRequestRoutes = router;
