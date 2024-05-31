import express from "express";
import { UserController } from "./user.controller";
import auth from "../../../middleware/auth";
import { UserRole } from "../../../../prisma/generated/client";
import validateRequest from "../../../middleware/validateRequest";
import { UserValidation } from "./user.validation";

const router = express.Router();
router.get("/testimonials", UserController.getTestimonial);
router.get("/locations", UserController.getAllLocations);
router.get("/user-list", auth(UserRole.ADMIN), UserController.getAllUsers);
router.get("/user/:id", auth(UserRole.ADMIN), UserController.getSingleUser);
router.get("/donor-list", UserController.getAllDonor);
router.get("/donor/:id", auth(), UserController.getSingleDonor);
router.get("/my-profile", auth(), UserController.getMyProfile);
router.put(
  "/my-profile",
  auth(),
  validateRequest(UserValidation.updateProfile),
  UserController.updateMyProfile,
);
router.patch(
  "/user/:id",
  auth(UserRole.ADMIN),
  validateRequest(UserValidation.updateUser),
  UserController.updateUser,
);

export const UserRoutes = router;
