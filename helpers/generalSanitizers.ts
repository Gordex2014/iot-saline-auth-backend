import { CustomSanitizer } from "express-validator";

export const toCapitalizeFirstLetter: CustomSanitizer = (input: string) => {
  return capitalizeFirstLetter(input);
};

export const stringToArray: CustomSanitizer = (input: string) => {
  return JSON.parse(input);
};

export const stringToDate: CustomSanitizer = (input: string) => {
  return new Date(input);
}

const capitalizeFirstLetter = (input: string) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};
