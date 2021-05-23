import { CustomValidator } from "express-validator";
import { IUser } from "../../models";
import { UserRoleEnum } from "../../types";

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
  if (inputArray.length > 2) {
    throw new Error("Solo se pueden tener dos roles activos");
  }
  return true;
};

export const nonRepeatedRole: CustomValidator = (
  role: string,
  { req }
) => {
  if (
    role !== UserRoleEnum.UserAdminRole &&
    role !== UserRoleEnum.UserDoctorRole
  ) {
    throw new Error("Se deben ingresar un rol válido");
  }
  const user = req.user as IUser;
  if (role === user.roles![0]) {
    throw new Error("No se debe ingresar un rol repetido");
  }
  return true;
};
