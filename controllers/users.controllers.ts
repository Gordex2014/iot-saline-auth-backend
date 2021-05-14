import { Request, Response } from "express";

import { IUser, User } from "../models";
import { successResponse, errorResponse } from "../network/response";
import { saltedPassword } from "../helpers";
import { UserRole } from "../types";

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
        status: true,
      });
      return successResponse(res, doctors as object, 200);
    }
    const doctors = await User.find({
      roles: "USER_DOCTOR_ROLE",
      status: true,
    });
    return successResponse(res, doctors as object, 200);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const getDoctorById = async (req: Request, res: Response) => {
  const doctor = req.user as IUser;
  successResponse(res, doctor as object, 200);
};

export const listAdmins = async (req: Request, res: Response) => {
  const { filter } = req.query as AllowedSearch;

  try {
    if (filter) {
      const regex = new RegExp(filter, "i");
      const admins = await User.find({
        roles: "USER_ADMIN_ROLE",
        $or: [{ firstName: regex }, { lastName: regex }],
        status: true,
      });
      return successResponse(res, admins as object, 200);
    }
    const admins = await User.find({ roles: "USER_ADMIN_ROLE", status: true });
    return successResponse(res, admins as object, 200);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const getAdminById = async (req: Request, res: Response) => {
  const admin = req.user as IUser;
  successResponse(res, admin as object, 200);
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

export const addPrivilege = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = req.user as IUser;
  const role = req.body.role as UserRole;

  user.roles!.push(role);
  try {
    await User.findByIdAndUpdate(id, user);
    successResponse(res, "Rol añadido", 204);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const deleteDoctor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const doctor = req.user as IUser;

  try {
    if (doctor.roles!.length > 1) {
      doctor.roles = ["USER_ADMIN_ROLE"];
      await User.findByIdAndUpdate(id, doctor);
      return successResponse(res, "Privilegio de doctor removido", 204);
    }
    await User.findByIdAndUpdate(id, { status: false });
    successResponse(res, "Usuario eliminado", 204);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const deleteAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;
  const admin = req.user as IUser;

  try {
    if (admin.roles!.length > 1) {
      admin.roles = ["USER_DOCTOR_ROLE"];
      await User.findByIdAndUpdate(id, admin);
      return successResponse(res, "Privilegio de administrador removido", 204);
    }
    await User.findByIdAndUpdate(id, { status: false });
    successResponse(res, "Usuario eliminado", 204);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};
