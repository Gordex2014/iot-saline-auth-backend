import { Request, Response } from "express";

import { IUser, User } from "../models/user.models";
import { successResponse, errorResponse } from "../network/response";
import { saltedPassword } from "../helpers";

type AllowedSearch = {
  filter: string;
};

export const listDoctors = async (req: Request, res: Response) => {
  const { filter } = req.query as AllowedSearch;

  try {
    if (filter) {
      const regex = new RegExp(filter, "i");
      const doctors = await User.find({
        roles: "USER_DOCTOR_ROLE",
        $or: [{ firstName: regex }, { lastName: regex }],
      });
      return successResponse(res, doctors as object, 200);
    }
    const doctors = await User.find({ roles: "USER_DOCTOR_ROLE" });
    return successResponse(res, doctors as object, 200);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const listAdmins = async (req: Request, res: Response) => {
  const { filter } = req.query as AllowedSearch;

  try {
    if (filter) {
      const regex = new RegExp(filter, "i");
      const admins = await User.find({
        roles: "USER_ADMIN_ROLE",
        $or: [{ firstName: regex }, { lastName: regex }],
      });
      return successResponse(res, admins as object, 200);
    }
    const admins = await User.find({ roles: "USER_ADMIN_ROLE" });
    return successResponse(res, admins as object, 200);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { _id, __v, status, password, ...data } = req.body as IUser;
  const user = new User(data);
  user.password = saltedPassword(password!);

  try {
    await user.save();
    successResponse(res, user, 200);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { _id, __v, status, password, ...data } = req.body as IUser;
  const { id } = req.params;

  try {
    const newUser = await User.findByIdAndUpdate(id, data, { new: true });
    successResponse(res, newUser as object, 204);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};
