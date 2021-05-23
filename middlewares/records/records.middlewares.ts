import { body, param } from "express-validator";
import { validPatientIdInDb, validRecordIdInDb } from "../../helpers";
import { validateItemExistence, validateUserInput } from "../fieldValidators";

export const recordCreationMiddleware = [
  body("patient", "El id del paciente es requerido").notEmpty(),
  validateUserInput,
  body(
    "patient",
    "El id del paciente debe de ser un id válido de mongo"
  ).isMongoId(),
  validateUserInput,
  body("patient").custom(validPatientIdInDb),
  validateItemExistence,
  body("dateTime", "La fecha es requerida").notEmpty(),
  validateUserInput,
  body("dateTime", "Se debe ingresar una fecha válida").isDate(),
  validateUserInput,
  body("medicalCondition", "La condición médica es requerida").notEmpty(),
  validateUserInput,
];

export const recordUpdateMiddleware = [
  param(
    "id",
    "El id del registro debe de ser un id válido de mongo"
  ).isMongoId(),
  validateUserInput,
  param("id").custom(validRecordIdInDb),
  validateItemExistence,
  body("dateTime", "La fecha es requerida").optional().notEmpty(),
  validateUserInput,
  body("dateTime", "Se debe ingresar una fecha válida").optional().isDate(),
  validateUserInput,
  body("medicalCondition", "La condición médica es requerida")
    .optional()
    .notEmpty(),
  validateUserInput,
];

export const validPatientForRecords = [
  param("patientId", "El id del paciente debe ser un id de mongo").isMongoId(),
  validateUserInput,
  param("patientId").custom(validPatientIdInDb),
  validateItemExistence,
];

export const validRecord = [
  param("id", "El id del registro debe ser un id de mongo").isMongoId(),
  validateUserInput,
  param("id").custom(validRecordIdInDb),
  validateItemExistence,
];
