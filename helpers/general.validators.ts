import { CustomValidator } from "express-validator";

export const isValidDate: CustomValidator = (inputDate: any) => {
  if (
    inputDate &&
    Object.prototype.toString.call(inputDate) === "[object Date]" &&
    !isNaN(inputDate) === false
  ) {
    throw new Error(`Se debe ingresar una fecha válida`);
  }
  return true;
};
