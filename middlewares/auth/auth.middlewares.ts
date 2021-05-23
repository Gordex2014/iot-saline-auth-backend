import { body } from "express-validator";

import { validateUserInput, validateCredentials } from "../fieldValidators";
import { validCredentialInDb } from "../../helpers";

export const loginMiddleware = [
  body("credential", "El credencial de usuario es requerido").notEmpty(),
  validateUserInput,
  body("password", "La contraseña es requerida").notEmpty(),
  validateUserInput,
  body("credential").custom(validCredentialInDb),
  validateCredentials,
];
