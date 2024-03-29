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

export const BloodRequestRoutes = router;
