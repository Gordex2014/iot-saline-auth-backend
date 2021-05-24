import { body, param } from "express-validator";
import { validBedInDb, validRoomInDb } from "../../helpers";
import { validateItemExistence, validateUserInput } from "../fieldValidators";

export const bedCreationMiddleware = [
  body("roomId", "El id de la habitación es requerido").notEmpty(),
  validateUserInput,
  body("roomId", "El id de la habitación debe ser un id de mongo").isMongoId(),
  validateUserInput,
  body("roomId").custom(validRoomInDb),
  validateItemExistence,
  body("bedNumber", "El número de cama es requerido").notEmpty(),
  validateUserInput,
  body("bedNumber", "El número de cama debe ser numérico").isNumeric(),
  validateUserInput,
  body("locationReference", "Una referencia a la localización es requerida")
    .optional()
    .notEmpty(),
  validateUserInput,
];

export const bedModificationMiddleware = [
  param("id", "Se debe ingresar un id válido de mongo").isMongoId(),
  validateUserInput,
  param("id").custom(validBedInDb),
  validateItemExistence,
  body("bedNumber", "El número de cama es requerido").optional().notEmpty(),
  validateUserInput,
  body("bedNumber", "El número de cama debe ser numérico")
    .optional()
    .isNumeric(),
  validateUserInput,
  body("locationReference", "Una referencia a la localización es requerida")
    .optional()
    .notEmpty(),
  validateUserInput,
];

export const validBedMiddleware = [
  param("id", "Se debe ingresar un id válido de mongo").isMongoId(),
  validateUserInput,
  param("id").custom(validBedInDb),
  validateItemExistence,
];

export const validRoomForBedsMiddleware = [
  param("roomId", "Se debe ingresar un id válido de mongo").isMongoId(),
  validateUserInput,
  param("roomId").custom(validRoomInDb),
  validateItemExistence,
];
