import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { BloodRequestRoutes } from "../modules/bloodRequest/bloodRequest.routes";

const router = express.Router();

const modulesRoutes = [
  {
    path: "/",
    route: AuthRoutes,
  },
  {
    path: "/",
    route: BloodRequestRoutes,
  },
];

modulesRoutes.map(({ path, route }) => {
  router.use(path, route);
});

export default router;
