import { body, param } from "express-validator";
import { validateUserInput, validateItemExistence } from "../fieldValidators";
import {
  eligibleForRolesAddition,
  isArrayOfStrings,
  isArrayOfValidUserRoles,
  nonRepeatedRole,
  userEmailAlreadyRegisteredInDb,
  userEmailAlreadyRegisteredInDbForUpdate,
  userMobileNumberAlreadyRegisteredInDb,
  userMobileNumberAlreadyRegisteredInDbForUpdate,
  userUsernameAlreadyRegisteredInDb,
  userUsernameAlreadyRegisteredInDbForUpdate,
  validAdminIdInDb,
  validDoctorIdInDb,
  validUserIdInDb,
} from "../../helpers";

export const userCreationMiddleware = [
  body("email", "El correo es obligatorio").notEmpty(),
  validateUserInput,
  body("email", "Se debe ingresar un correo valido").isEmail(),
  validateUserInput,
  body("email").custom(userEmailAlreadyRegisteredInDb),
  validateUserInput,
  body("firstName", "El nombre es requerido").notEmpty(),
  validateUserInput,
  body("firstName", "El nombre no debe ser numérico").not().isNumeric(),
  validateUserInput,
  body("imageURI", "El la imagen es requerida").optional().notEmpty(),
  validateUserInput,
  body("imageURI", "Debe ser una imagen válida").optional().isDataURI(),
  validateUserInput,
  body("lastName", "El apellido es requerido").notEmpty(),
  validateUserInput,
  body("lastName", "El apellido no debe ser numérico").not().isNumeric(),
  validateUserInput,
  body("mobileNumber", "El número de celular es requerido").notEmpty(),
  validateUserInput,
  body(
    "mobileNumber",
    "Se debe ingresar un número de celular válido"
  ).isMobilePhone("es-BO"),
  validateUserInput,
  body("mobileNumber").custom(userMobileNumberAlreadyRegisteredInDb),
  validateUserInput,
  body("password", "La contraseña es requerida").notEmpty(),
  validateUserInput,
  body("password", "La contraseña debe ser de al menos 6 caracteres").isLength({
    min: 6,
  }),
  validateUserInput,
  body("roles", "Los roles son requeridos").optional().notEmpty(),
  validateUserInput,
  body("roles", "Los roles deben ser provistos en un array")
    .optional()
    .isArray(),
  validateUserInput,
  body("roles").optional().custom(isArrayOfStrings),
  validateUserInput,
  body("roles").optional().custom(isArrayOfValidUserRoles),
  validateUserInput,
  body("username", "El nombre de usuario es requerido").notEmpty(),
  validateUserInput,
  body(
    "username",
    "El nombre de usuario debe ser de al menos 6 caracteres"
  ).isLength({
    min: 6,
  }),
  validateUserInput,
  body("username").custom(userUsernameAlreadyRegisteredInDb),
  validateUserInput,
];

export const userModificationMiddleware = [
  param("id", "El id debe ser un id valido de mongo").isMongoId(),
  validateUserInput,
  param("id").custom(validUserIdInDb),
  validateItemExistence,
  body("email", "El correo es obligatorio").optional().notEmpty(),
  validateUserInput,
  body("email", "Se debe ingresar un correo valido").optional().isEmail(),
  validateUserInput,
  body("email").optional().custom(userEmailAlreadyRegisteredInDbForUpdate),
  validateUserInput,
  body("firstName", "El nombre es requerido").optional().notEmpty(),
  validateUserInput,
  body("firstName", "El nombre no debe ser numérico")
    .optional()
    .not()
    .isNumeric(),
  validateUserInput,
  body("imageUrl", "El url de la imagen es requerido").optional().notEmpty(),
  validateUserInput,
  body("imageUrl", "El url de la imagen debe ser un url válido")
    .optional()
    .isURL(),
  validateUserInput,
  body("lastName", "El apellido es requerido").optional().notEmpty(),
  validateUserInput,
  body("lastName", "El apellido no debe ser numérico")
    .optional()
    .not()
    .isNumeric(),
  validateUserInput,
  body("mobileNumber", "El número de celular es requerido")
    .optional()
    .notEmpty(),
  validateUserInput,
  body("mobileNumber", "Se debe ingresar un número de celular válido")
    .optional()
    .isMobilePhone("es-BO"),
  validateUserInput,
  body("mobileNumber")
    .optional()
    .custom(userMobileNumberAlreadyRegisteredInDbForUpdate),
  validateUserInput,
  body("roles", "Los roles son requeridos").optional().notEmpty(),
  validateUserInput,
  body("roles", "Los roles deben ser provistos en un array")
    .optional()
    .isArray(),
  validateUserInput,
  body("roles").optional().custom(isArrayOfStrings),
  validateUserInput,
  body("roles").optional().custom(isArrayOfValidUserRoles),
  validateUserInput,
  body("username", "El nombre de usuario es requerido").optional().notEmpty(),
  validateUserInput,
  body("username", "El nombre de usuario debe ser de al menos 6 caracteres")
    .optional()
    .isLength({
      min: 6,
    }),
  validateUserInput,
  body("username")
    .optional()
    .custom(userUsernameAlreadyRegisteredInDbForUpdate),
  validateUserInput,
  body("password").optional().notEmpty(),
  validateUserInput,
  body("password", "La contraseña debe ser de al menos 6 caracteres")
    .optional()
    .isLength({
      min: 6,
    }),
  validateUserInput,
];

export const validDoctorIdMiddleware = [
  param("id", "El id debe ser un id valido de mongo").isMongoId(),
  validateUserInput,
  param("id").custom(validDoctorIdInDb),
  validateItemExistence,
];

export const validAdminIdMiddleware = [
  param("id", "El id debe ser un id valido de mongo").isMongoId(),
  validateUserInput,
  param("id").custom(validAdminIdInDb),
  validateItemExistence,
];

export const roleAdditionMiddleware = [
  param("id", "El id debe ser un id valido de mongo").isMongoId(),
  validateUserInput,
  param("id").custom(validUserIdInDb),
  validateItemExistence,
  param("id").custom(eligibleForRolesAddition),
  validateUserInput,
  body("role", "Se debe agregar el campo de rol").notEmpty(),
  validateUserInput,
  body("role").custom(nonRepeatedRole),
  validateUserInput,
];
