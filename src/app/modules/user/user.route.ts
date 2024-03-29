import express from "express";
import validateRequest from "../../../middleware/validateRequest";
import { UserController } from "./user.controller";
import { UserValidations } from "./user.validation";
const router = express.Router();

router.post(
  "/register",
  validateRequest(UserValidations.createUserValidation),
  UserController.createUser,
);

export const UserRoutes = router;
