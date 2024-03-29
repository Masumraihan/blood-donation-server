import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { BloodRequestRoutes } from "../modules/bloodRequest/bloodRequest.routes";
import { UserRoutes } from "../modules/user/user.route";

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
  {
    path: "/",
    route: UserRoutes,
  },
];

modulesRoutes.map(({ path, route }) => {
  router.use(path, route);
});

export default router;
