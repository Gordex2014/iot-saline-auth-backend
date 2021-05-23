import { CustomValidator } from "express-validator";
import { Record } from "../../models";

export const validRecordIdInDb: CustomValidator = async (
  id: string,
  { req }
) => {
  const record = await Record.findById(id);
  if (!record) {
    throw new Error(`Registro con id ${id} no encontrado`);
  }
  req.record = record;
  return true;
};
