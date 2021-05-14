import { CustomValidator } from "express-validator";
import { User } from "../models";

export const validUsernameInDb: CustomValidator = async (
  username: string,
  { req }
) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error(`Usuario o contraseña no válidos`);
  }
  if (!user.status) {
    throw new Error(`Usuario o contraseña no válidos`);
  }
  req.user = user;
  return true;
};
