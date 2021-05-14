import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { config } from "../config/config";
import { IUser, User } from "../models";
import { clientError, errorResponse } from "../network/response";
import { UserRole, Headers, JwtPayload } from "../types";

export const validateJwt = (rolesRequired: UserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header(Headers.Token);
    if (!token) {
      return clientError(res, "No existe un token en la petición", 401);
    }
    const { id } = jwt.verify(token, config.jwtSecret) as JwtPayload;
    try {
      let user: IUser | null = null;
      if (rolesRequired.includes("USER_ADMIN_ROLE") && user === null) {
        user = await User.findOne({ _id: id, roles: "USER_ADMIN_ROLE" });
      }
      if (rolesRequired.includes("USER_DOCTOR_ROLE") && user === null) {
        user = await User.findOne({ _id: id, roles: "USER_DOCTOR_ROLE" });
      }

      if (!user) {
        return clientError(res, "Token inválido", 401);
      }
      if (!user.status) {
        return clientError(res, "Token inválido", 401);
      }

      req.activeUser = user;
      next();
    } catch (error) {
      errorResponse(
        res,
        "Por favor, póngase en contacto con un administrador",
        500,
        error
      );
    }
  };
};
