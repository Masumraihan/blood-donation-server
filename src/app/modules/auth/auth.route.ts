import express from "express";
import validateRequest from "../../../middleware/validateRequest";
import { AuthController } from "./auth.controller";
import { AuthValidations } from "./auth.validation";
import auth from "../../../middleware/auth";
const router = express.Router();

router.post(
  "/register",
  validateRequest(AuthValidations.registerValidation),
  AuthController.register,
);

router.post("/login", validateRequest(AuthValidations.loginValidation), AuthController.login);

router.patch(
  "/change-password",
  auth(),
  validateRequest(AuthValidations.changePassword),
  AuthController.changePassword,
);

export const AuthRoutes = router;
