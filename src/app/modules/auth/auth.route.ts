import express from "express";
import validateRequest from "../../../middleware/validateRequest";
import { AuthController } from "./auth.controller";
import { UserValidations } from "./auth.validation";
const router = express.Router();

router.post(
  "/register",
  validateRequest(UserValidations.registerValidation),
  AuthController.register,
);

router.post("/login", AuthController.login);

export const UserRoutes = router;
