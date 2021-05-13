import { CustomValidator } from "express-validator";
import { User } from "../models/user.models";

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

export const userEmailAlreadyRegisteredInDb: CustomValidator = async (
  email: string
) => {
  const emailExists = await User.findOne({ email });
  if (emailExists) {
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

export const userMobileNumberAlreadyRegisteredInDb: CustomValidator = async (
  mobileNumber: number
) => {
  const mobileNumberExists = await User.findOne({ mobileNumber });
  if (mobileNumberExists) {
    throw new Error(`El teléfono ${mobileNumber} ya se encuentra registrado`);
  }
  return true;
};
