import { body, param } from "express-validator";
import {
  isValidGender,
  patientCellphoneRegistered,
  patientCellphoneRegisteredForUpdate,
  toCapitalizeFirstLetter,
  toEnglishGenderTermn,
  validPatientIdInDb,
} from "../../helpers/";
import { validateUserInput, validateItemExistence } from "../fieldValidators";

export const patientCreationMiddleware = [
  body("firstName", "El nombre es requerido").notEmpty(),
  validateUserInput,
  body("firstName", "El nombre no debe ser un número").not().isNumeric(),
  validateUserInput,
  body("lastName", "El apellido es requerido").notEmpty(),
  validateUserInput,
  body("firstName", "El apellido no debe ser un número").not().isNumeric(),
  validateUserInput,
  body("dateOfBirth", "La fecha es requerida").notEmpty(),
  validateUserInput,
  body("dateOfBirth", "Se debe ingresar una fecha válida").isDate(),
  validateUserInput,
  body("gender", "El género es requerido").notEmpty(),
  validateUserInput,
  body("gender").customSanitizer(toCapitalizeFirstLetter),
  body("gender").custom(isValidGender),
  validateUserInput,
  body("gender").customSanitizer(toEnglishGenderTermn),
  body("mobileNumber", "El número de celular es requerido").notEmpty(),
  validateUserInput,
  body(
    "mobileNumber",
    "El número de celular debe ser válido y de Bolivia"
  ).isMobilePhone("es-BO"),
  validateUserInput,
  body("mobileNumber").custom(patientCellphoneRegistered),
  validateUserInput,
  body("imageUrl", "El url de la imagen no debe estar vacío")
    .optional()
    .notEmpty(),
  validateUserInput,
  body("imageUrl", "Se debe ingresar un URL válido").optional().isURL(),
  validateUserInput,
];

export const patientUpdateMiddleware = [
  param("id", "Se debe ingresar un id válido de mongo").isMongoId(),
  validateUserInput,
  param("id").custom(validPatientIdInDb),
  validateItemExistence,
  body("firstName", "El nombre es requerido").optional().notEmpty(),
  validateUserInput,
  body("firstName", "El nombre no debe ser un número")
    .optional()
    .not()
    .isNumeric(),
  validateUserInput,
  body("lastName", "El apellido es requerido").optional().notEmpty(),
  validateUserInput,
  body("firstName", "El apellido no debe ser un número")
    .optional()
    .not()
    .isNumeric(),
  validateUserInput,
  body("dateOfBirth", "La fecha es requerida").optional().notEmpty(),
  validateUserInput,
  body("dateOfBirth", "Se debe ingresar una fecha válida").optional().isDate(),
  validateUserInput,
  body("gender", "El género es requerido").optional().notEmpty(),
  validateUserInput,
  body("gender").optional().customSanitizer(toCapitalizeFirstLetter),
  body("gender").optional().custom(isValidGender),
  validateUserInput,
  body("gender").optional().customSanitizer(toEnglishGenderTermn),
  body("mobileNumber", "El número de celular es requerido")
    .optional()
    .notEmpty(),
  validateUserInput,
  body("mobileNumber", "El número de celular debe ser válido y de Bolivia")
    .optional()
    .isMobilePhone("es-BO"),
  validateUserInput,
  body("mobileNumber").optional().custom(patientCellphoneRegisteredForUpdate),
  validateUserInput,
  body("imageUrl", "El url de la imagen no debe estar vacío")
    .optional()
    .notEmpty(),
  validateUserInput,
  body("imageUrl", "Se debe ingresar un URL válido").optional().isURL(),
  validateUserInput,
];

export const validPatientMiddleware = [
  param("id", "Se debe ingresar un id válido de mongo").isMongoId(),
  validateUserInput,
  param("id").custom(validPatientIdInDb),
  validateItemExistence,
];
