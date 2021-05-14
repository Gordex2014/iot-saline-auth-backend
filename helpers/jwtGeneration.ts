import jwt from "jsonwebtoken";

import { config } from "../config/config";

export const generateJWT = (id: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload = { id };
    jwt.sign(
      payload,
      config.jwtSecret,
      {
        expiresIn: "4d",
      },
      (err, token) => {
        if (err) {
          reject("Token couldn't be generated");
        } else {
          resolve(token!);
        }
      }
    );
  });
};
