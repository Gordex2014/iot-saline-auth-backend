import { Router } from "express";
import { userLogin } from "../controllers/auth.controllers";

import { loginMiddleware } from "../middlewares";

const router = Router();

router.post("/login", loginMiddleware, userLogin);

export default router;
