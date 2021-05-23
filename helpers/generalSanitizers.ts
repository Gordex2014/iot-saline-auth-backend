import { CustomSanitizer } from "express-validator";

export const toCapitalizeFirstLetter: CustomSanitizer = (input: string) => {
  return capitalizeFirstLetter(input);
};

const capitalizeFirstLetter = (input: string) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};
