import { Router } from "express";
import {
  addPrivilege,
  createUser,
  deleteAdmin,
  deleteDoctor,
  getAdminById,
  getDoctorById,
  listAdmins,
  listDoctors,
  updateUser,
} from "../controllers/users.controllers";
import {
  roleAdditionMiddleware,
  userCreationMiddleware,
  userModificationMiddleware,
  validAdminIdMiddleware,
  validDoctorIdMiddleware,
} from "../middlewares";

const router = Router();

router.get("/doctors", listDoctors);

router.get("/doctors/:id", validDoctorIdMiddleware, getDoctorById);

router.get("/admins", listAdmins);

router.get("/admins/:id", validAdminIdMiddleware, getAdminById);

router.post("/", userCreationMiddleware, createUser);

router.put("/:id", userModificationMiddleware, updateUser);

router.patch("/roles/:id", roleAdditionMiddleware, addPrivilege);

router.delete("/doctors/:id", validDoctorIdMiddleware, deleteDoctor);

router.delete("/admins/:id", validAdminIdMiddleware, deleteAdmin);

export default router;
