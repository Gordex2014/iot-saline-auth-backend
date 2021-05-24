import { CustomValidator } from "express-validator";
import { Room } from "../../models";

export const validRoomInDb: CustomValidator = async (id: string, { req }) => {
  const room = await Room.findById(id);
  if (!room) {
    throw new Error(`Habitación con id ${id} no encontrada`);
  }
  req.room = room;
  return true;
};
