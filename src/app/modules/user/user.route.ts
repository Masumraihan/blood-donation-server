import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/donor-list", UserController.getAllBloodRequests);

export const UserRoutes = router;
