import { body, param } from "express-validator";
import { validRoomInDb } from "../../helpers";
import { validateItemExistence, validateUserInput } from "../fieldValidators";

export const roomCreationMiddleware = [
  body("name", "El nombre es requerido").notEmpty(),
  validateUserInput,
  body("name", "El nombre no debe ser un número").not().isNumeric(),
  validateUserInput,
  body("floor", "El piso es requerido").notEmpty(),
  validateUserInput,
  body("floor", "El piso debe ser un número").isNumeric(),
  validateUserInput,
  body("building", "El nombre del edificio es requerido").notEmpty(),
  validateUserInput,
  body("locationReference", "Una referencia a la localización es requerida")
    .optional()
    .notEmpty(),
  validateUserInput,
];

export const roomModificationMiddleware = [
  param("id", "Se debe ingresar un id válido de mongo").isMongoId(),
  validateUserInput,
  param("id").custom(validRoomInDb),
  validateItemExistence,
  body("name", "El nombre es requerido").optional().notEmpty(),
  validateUserInput,
  body("name", "El nombre no debe ser un número").optional().not().isNumeric(),
  validateUserInput,
  body("floor", "El piso es requerido").optional().notEmpty(),
  validateUserInput,
  body("floor", "El piso debe ser un número").optional().isNumeric(),
  validateUserInput,
  body("building", "El nombre del edificio es requerido").optional().notEmpty(),
  validateUserInput,
  body("locationReference", "Una referencia a la localización es requerida")
    .optional()
    .notEmpty(),
  validateUserInput,
];

export const validRoomMiddleware = [
  param("id", "Se debe ingresar un id válido de mongo").isMongoId(),
  validateUserInput,
  param("id").custom(validRoomInDb),
  validateItemExistence,
];
