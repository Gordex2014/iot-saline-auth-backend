import { CustomValidator } from "express-validator";
import { GenderEnumForValidation } from "../../types";

export const isValidGender: CustomValidator = (inputString: string) => {
  let logicalCounter: number = 0;
  if (inputString !== GenderEnumForValidation.Male) {
    logicalCounter += 1;
  }
  if (inputString !== GenderEnumForValidation.Female) {
    logicalCounter += 1;
  }
  if (logicalCounter === 2) {
    throw new Error(
      `El género debe ser ${GenderEnumForValidation.Female} o ${GenderEnumForValidation.Male}`
    );
  }
  return true;
};
