import { Router } from "express";
import {
  createRecord,
  getRecordById,
  listPatientRecords,
  updateRecord,
} from "../controllers/records.controllers";
import {
  recordCreationMiddleware,
  recordUpdateMiddleware,
  validateJwt,
  validPatientForRecords,
  validRecord,
} from "../middlewares";

const router = Router();

router.use(validateJwt(["USER_ADMIN_ROLE", "USER_DOCTOR_ROLE"]));

router.get("/patient/:patientId", validPatientForRecords, listPatientRecords);

router.get("/:id", validRecord, getRecordById);

router.post("/", recordCreationMiddleware, createRecord);

router.put("/:id", recordUpdateMiddleware, updateRecord);

export default router;
