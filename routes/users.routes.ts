import { Router } from "express";
import { userCreationMiddleware } from "../middlewares";
import {
  createUser,
  updateUser,
  listDoctors,
  listAdmins,
} from "../controllers/users.controllers";
import { userModificationMiddleware } from "../middlewares/users.middlewares";

const router = Router();

router.get("/doctors", listDoctors);

router.get("/admins", listAdmins);

router.post("/", userCreationMiddleware, createUser);

router.put("/:id", userModificationMiddleware, updateUser);

export default router;
