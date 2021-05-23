import { Router } from "express";
import {
  createPatient,
  deletePatient,
  getPatientById,
  listPatients,
  updatePatient,
} from "../controllers/patients.controllers";
import {
  patientCreationMiddleware,
  patientUpdateMiddleware,
  validPatientMiddleware,
  validateJwt,
} from "../middlewares";

const router = Router();

router.use(validateJwt(["USER_ADMIN_ROLE", "USER_DOCTOR_ROLE"]));

router.get("/", listPatients);

router.get("/:id", validPatientMiddleware, getPatientById);

router.post("/", patientCreationMiddleware, createPatient);

router.put("/:id", patientUpdateMiddleware, updatePatient);

router.delete("/:id", validPatientMiddleware, deletePatient);

export default router;
