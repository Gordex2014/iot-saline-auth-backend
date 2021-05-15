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
  validateJwt,
  validDoctorIdMiddleware,
} from "../middlewares";

const router = Router();

router.get(
  "/doctors",
  validateJwt(["USER_ADMIN_ROLE", "USER_DOCTOR_ROLE"]),
  listDoctors
);

router.get(
  "/doctors/:id",
  validateJwt(["USER_ADMIN_ROLE", "USER_DOCTOR_ROLE"]),
  validDoctorIdMiddleware,
  getDoctorById
);

router.get("/admins", validateJwt(["USER_ADMIN_ROLE"]), listAdmins);

router.get(
  "/admins/:id",
  validateJwt(["USER_ADMIN_ROLE"]),
  validAdminIdMiddleware,
  getAdminById
);

router.post(
  "/",
  validateJwt(["USER_ADMIN_ROLE"]),
  userCreationMiddleware,
  createUser
);

router.put(
  "/:id",
  validateJwt(["USER_ADMIN_ROLE"]),
  userModificationMiddleware,
  updateUser
);

router.patch(
  "/roles/:id",
  validateJwt(["USER_ADMIN_ROLE"]),
  roleAdditionMiddleware,
  addPrivilege
);

router.delete(
  "/doctors/:id",
  validateJwt(["USER_ADMIN_ROLE"]),
  validDoctorIdMiddleware,
  deleteDoctor
);

router.delete(
  "/admins/:id",
  validateJwt(["USER_ADMIN_ROLE"]),
  validAdminIdMiddleware,
  deleteAdmin
);

export default router;
