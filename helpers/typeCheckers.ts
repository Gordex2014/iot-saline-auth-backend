import { CustomValidator } from "express-validator";
import { UserRoleEnum } from "../types/user.types";

export const isArrayOfStrings: CustomValidator = (inputArray: any[]) => {
  inputArray.forEach((arrayElement) => {
    if (typeof arrayElement !== "string") {
      throw new Error("Todos los elementos del array deben ser strings");
    }
  });
  return true;
};

export const isArrayOfValidUserRoles: CustomValidator = (
  inputArray: string[]
) => {
  inputArray.forEach((arrayElement) => {
    if (
      arrayElement !== UserRoleEnum.UserAdminRole &&
      arrayElement !== UserRoleEnum.UserDoctorRole
    ) {
      throw new Error("Se deben ingresar roles válidos");
    }
  });
  return true;
};
