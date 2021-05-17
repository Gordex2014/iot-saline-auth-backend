import { CustomValidator } from "express-validator";
import { IUser, User } from "../models";

export const validUserIdInDb: CustomValidator = async (id: string, { req }) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error(`Usuario con id ${id} no encontrado`);
  }
  if (!user.status) {
    throw new Error(
      `Usuario con id ${id} restringido, póngase en contacto con un administrador`
    );
  }
  req.user = user;
  return true;
};

export const validDoctorIdInDb: CustomValidator = async (
  id: string,
  { req }
) => {
  const doctor = await User.findOne({ _id: id, roles: "USER_DOCTOR_ROLE" });
  if (!doctor) {
    throw new Error(`Doctor con id ${id} no encontrado`);
  }
  if (!doctor.status) {
    throw new Error(
      `Doctor con id ${id} restringido, póngase en contacto con un administrador`
    );
  }
  req.user = doctor;
  return true;
};

export const validAdminIdInDb: CustomValidator = async (
  id: string,
  { req }
) => {
  const admin = await User.findOne({ _id: id, roles: "USER_ADMIN_ROLE" });
  if (!admin) {
    throw new Error(`Admin con id ${id} no encontrado`);
  }
  if (!admin.status) {
    throw new Error(
      `Admin con id ${id} restringido, póngase en contacto con un administrador`
    );
  }
  req.user = admin;
  return true;
};

export const userEmailAlreadyRegisteredInDb: CustomValidator = async (
  email: string
) => {
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    throw new Error(`El correo ${email} ya se encuentra registrado`);
  }
  return true;
};

export const userEmailAlreadyRegisteredInDbForUpdate: CustomValidator = async (
  email: string,
  { req }
) => {
  const user = req.user;
  const emailExists = await User.findOne({ email });
  if (emailExists && emailExists.email !== user.email) {
    throw new Error(`El correo ${email} ya se encuentra registrado`);
  }
  return true;
};

export const userUsernameAlreadyRegisteredInDb: CustomValidator = async (
  username: string
) => {
  const usernameExists = await User.findOne({ username });
  if (usernameExists) {
    throw new Error(
      `El nombre de usuario ${username} ya se encuentra registrado`
    );
  }
  return true;
};

export const userUsernameAlreadyRegisteredInDbForUpdate: CustomValidator =
  async (username: string, { req }) => {
    const user = req.user;
    const usernameExists = await User.findOne({ username });
    if (usernameExists && usernameExists.username !== user.username) {
      throw new Error(
        `El nombre de usuario ${username} ya se encuentra registrado`
      );
    }
    return true;
  };

export const userMobileNumberAlreadyRegisteredInDb: CustomValidator = async (
  mobileNumber: number
) => {
  const mobileNumberExists = await User.findOne({ mobileNumber });
  if (mobileNumberExists) {
    throw new Error(`El teléfono ${mobileNumber} ya se encuentra registrado`);
  }
  return true;
};

export const userMobileNumberAlreadyRegisteredInDbForUpdate: CustomValidator =
  async (mobileNumber: number, { req }) => {
    const user = req.user;
    const mobileNumberExists = await User.findOne({ mobileNumber });
    if (
      mobileNumberExists &&
      mobileNumberExists.mobileNumber !== user.mobileNumber
    ) {
      throw new Error(`El teléfono ${mobileNumber} ya se encuentra registrado`);
    }
    return true;
  };

export const eligibleForRolesAddition: CustomValidator = async (
  id: string,
  { req }
) => {
  const user = req.user as IUser;
  const rolesArray = user.roles!;
  if (rolesArray.length > 1) {
    throw new Error(
      `El usuario con id ${id} ya tiene la cantidad máxima de roles permitidos`
    );
  }
  return true;
};
