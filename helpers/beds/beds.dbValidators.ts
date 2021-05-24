import { CustomValidator } from "express-validator";
import { Bed } from "../../models";

export const validBedInDb: CustomValidator = async (id: string, { req }) => {
  const bed = await Bed.findById(id);
  if (!bed) {
    throw new Error(`Cama con id ${id} no encontrada`);
  }
  req.bed = bed;
  return true;
};
