import express from "express";
import { UserRoutes } from "../modules/auth/auth.route";

const router = express.Router();

const modulesRoutes = [
  {
    path: "/",
    route: UserRoutes,
  },
];

modulesRoutes.map(({ path, route }) => {
  router.use(path, route);
});

export default router;
