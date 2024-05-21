import express from "express";
import { UserController } from "./user.controller";
import auth from "../../../middleware/auth";
import { UserRole } from "../../../../prisma/generated/client";

const router = express.Router();
router.get("/testimonials", UserController.getTestimonial);
router.get("/user-list", auth(UserRole.ADMIN), UserController.getAllUsers);
router.get("/:id", auth(UserRole.ADMIN), UserController.getSingleUser);
router.get("/donor-list", UserController.getAllDonor);
router.get("/:id", UserController.getSingleDonor);
router.get("/my-profile", auth(), UserController.getMyProfile);
router.put("/my-profile", auth(), UserController.updateMyProfile);

export const UserRoutes = router;
