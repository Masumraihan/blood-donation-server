import express from "express";
import { UserController } from "./user.controller";
import auth from "../../../middleware/auth";

const router = express.Router();

router.get("/donor-list", UserController.getAllBloodRequests);
router.get("/my-profile", auth(), UserController.getMyProfile);
router.put("/my-profile", auth(), UserController.updateMyProfile);

export const UserRoutes = router;
