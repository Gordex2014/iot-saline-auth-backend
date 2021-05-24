import { Request, Response } from "express";
import { Bed, IBed } from "../models";
import { errorResponse, successResponse } from "../network/response";

type AllowedSearch = {
  filter: string;
};

export const listBeds = async (req: Request, res: Response) => {
  const { filter } = req.query as AllowedSearch;

  try {
    if (filter) {
      const regex = new RegExp(filter, "i");
      const beds = await Bed.find({ locationReference: regex }).populate({
        path: "roomId",
        select: ["name", "floor"],
      });
      return successResponse(res, beds as object, 200);
    }
    const beds = await Bed.find().populate({
      path: "roomId",
      select: ["name", "floor"],
    });
    return successResponse(res, beds as object, 200);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const listBedsByRoomId = async (req: Request, res: Response) => {
  const { filter } = req.query as AllowedSearch;
  const { roomId } = req.params;

  try {
    if (filter) {
      const regex = new RegExp(filter, "i");
      const beds = await Bed.find({
        locationReference: regex,
        roomId,
      });
      return successResponse(res, beds as object, 200);
    }
    const beds = await Bed.find({ roomId });
    return successResponse(res, beds as object, 200);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const getBedById = async (req: Request, res: Response) => {
  const bed = req.bed as IBed;
  successResponse(res, bed as object, 200);
};

export const createBed = async (req: Request, res: Response) => {
  const { _id, __v, ...data } = req.body as IBed;

  const bed = new Bed(data);
  try {
    await bed.save();
    successResponse(res, bed, 201);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const updateBed = async (req: Request, res: Response) => {
  const { _id, __v, ...data } = req.body as IBed;
  const { id } = req.params;

  try {
    await Bed.findByIdAndUpdate(id, data);
    successResponse(res, "Habitación modificada correctamente", 204);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};
