import { Request, Response } from "express";

import { passwordComparison, generateJWT } from "../helpers";
import { IUser } from "../models";
import { clientError, successResponse } from "../network/response";
import { UserRole } from "../types";

type LoginBody = {
  username: string;
  password: string;
};

export const loginUser = async (req: Request, res: Response) => {
  const {
    password: storedPassword,
    _id,
    roles,
    firstName,
    lastName,
  } = req.user as IUser;
  const { password } = req.body as LoginBody;

  const passwordComparisonResult = passwordComparison(
    password,
    storedPassword!
  );
  if (!passwordComparisonResult) {
    return clientError(res, "Usuario o contraseña no válidos", 401);
  }

  const token = await generateJWT(_id);

  if (roles?.length === 2) {
    const returnObj = loginReturnObject(
      "USER_ADMIN_ROLE",
      firstName,
      lastName,
      _id,
      token
    );
    return successResponse(res, returnObj, 200);
  }
  const returnObj = loginReturnObject(
    roles![0],
    firstName,
    lastName,
    _id,
    token
  );
  successResponse(res, returnObj, 200);
};

export const renewUser = async (req: Request, res: Response) => {
  const { _id, roles, firstName, lastName } = req.activeUser as IUser;

  const token = await generateJWT(_id);

  if (roles?.length === 2) {
    const returnObj = loginReturnObject(
      "USER_ADMIN_ROLE",
      firstName,
      lastName,
      _id,
      token
    );
    return successResponse(res, returnObj, 200);
  }
  const returnObj = loginReturnObject(
    roles![0],
    firstName,
    lastName,
    _id,
    token
  );
  successResponse(res, returnObj, 200);
};

const loginReturnObject = (
  role: UserRole,
  firstName: string,
  lastName: string,
  id: string,
  token: string
) => {
  return {
    id,
    role,
    firstName,
    lastName,
    token,
  };
};
