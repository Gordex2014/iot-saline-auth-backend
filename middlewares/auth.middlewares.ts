import { body } from "express-validator";

import { validateUserInput, validateCredentials } from "./fieldValidators";
import { validUsernameInDb } from "../helpers";

export const loginMiddleware = [
  body("username", "El nombre de usuario es requerido").notEmpty(),
  validateUserInput,
  body("password", "La contraseña es requerida").notEmpty(),
  validateUserInput,
  body("username").custom(validUsernameInDb),
  validateCredentials,
];
