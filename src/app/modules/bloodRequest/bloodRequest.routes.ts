import express from "express";
import { BloodRequestController } from "./bloodRequest.controller";
import auth from "../../../middleware/auth";

const router = express.Router();

router.post("/donation-request", auth(), BloodRequestController.createBloodRequest);
export const BloodRequestRoutes = router;
