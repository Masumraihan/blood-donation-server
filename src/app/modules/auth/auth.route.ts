import express from "express";
import validateRequest from "../../../middleware/validateRequest";
import { AuthController } from "./auth.controller";
import { AuthValidations } from "./auth.validation";
const router = express.Router();

router.post(
  "/register",
  validateRequest(AuthValidations.registerValidation),
  AuthController.register,
);

router.post("/login", validateRequest(AuthValidations.loginValidation), AuthController.login);

export const AuthRoutes = router;
