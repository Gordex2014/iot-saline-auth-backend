import { CustomValidator } from "express-validator";
import { User } from "../../models";

export const validCredentialInDb: CustomValidator = async (
  credential: string,
  { req }
) => {
  const user = await User.findOne({
    $or: [{ username: credential }, { email: credential }],
  });
  if (!user) {
    throw new Error(`Usuario o contraseña no válidos`);
  }
  if (!user.status) {
    throw new Error(`Usuario o contraseña no válidos`);
  }
  req.user = user;
  return true;
};
