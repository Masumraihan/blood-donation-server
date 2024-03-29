import express from "express";
import { UserRoutes } from "../modules/user/user.route";

const router = express.Router();

const modulesRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
];

modulesRoutes.map(({ path, route }) => {
  router.use(path, route);
});

export default router;
