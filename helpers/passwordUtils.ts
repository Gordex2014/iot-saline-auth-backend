import bcryptjs from "bcryptjs";

export const saltedPassword = (password: string) => {
  const salt = bcryptjs.genSaltSync();
  return bcryptjs.hashSync(password, salt);
};

export const passwordComparison = (
  inputPassword: string,
  hashedPassword: string
) => {
  return bcryptjs.compareSync(inputPassword, hashedPassword);
};
