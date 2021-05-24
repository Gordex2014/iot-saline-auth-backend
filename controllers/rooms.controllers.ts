import { Request, Response } from "express";
import { IRoom, Room } from "../models";
import { errorResponse, successResponse } from "../network/response";

type AllowedSearch = {
  filter: string;
};

export const listRooms = async (req: Request, res: Response) => {
  const { filter } = req.query as AllowedSearch;

  try {
    if (filter) {
      const regex = new RegExp(filter, "i");
      const rooms = await Room.find({
        $or: [{ name: regex }, { locationReference: regex }],
      });
      return successResponse(res, rooms as object, 200);
    }
    const rooms = await Room.find();
    return successResponse(res, rooms as object, 200);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const getRoomById = async (req: Request, res: Response) => {
  const room = req.room as IRoom;
  successResponse(res, room as object, 200);
};

export const createRoom = async (req: Request, res: Response) => {
  const { _id, __v, ...data } = req.body as IRoom;

  const room = new Room(data);
  try {
    await room.save();
    successResponse(res, room, 201);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const updateRoom = async (req: Request, res: Response) => {
  const { _id, __v, ...data } = req.body as IRoom;
  const { id } = req.params;

  try {
    await Room.findByIdAndUpdate(id, data);
    successResponse(res, "Habitación modificada correctamente", 204);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};
