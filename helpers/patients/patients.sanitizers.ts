import { CustomSanitizer } from "express-validator";
import { GenderEnumForValidation, GenderEnum } from "../../types";

export const toEnglishGenderTermn: CustomSanitizer = (
  gender: GenderEnumForValidation
) => {
  if (gender === GenderEnumForValidation.Female) {
    return GenderEnum.Female;
  } else {
    return GenderEnum.Male;
  }
};