import { Router } from "express";
import { loginUser, renewUser } from "../controllers/auth.controllers";

import { loginMiddleware, validateJwt } from "../middlewares";

const router = Router();

router.post("/login", loginMiddleware, loginUser);

router.get(
  "/renew",
  validateJwt(["USER_ADMIN_ROLE", "USER_DOCTOR_ROLE"]),
  renewUser
);

export default router;
