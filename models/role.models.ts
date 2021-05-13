import { Document, Schema, model } from "mongoose";
import { GeneralRoles } from "../types";

export interface IRole extends Document {
  role: GeneralRoles;
  id?: string;
}

const roleSchema = new Schema(
  {
    role: {
      type: String,
      required: [true, "Role is mandatory"],
      enum: ["USER_ADMIN_ROLE", "USER_DOCTOR_ROLE", "PATIENT_ROLE"],
    },
  },
  {
    toJSON: {
      transform: (currentDoc: IRole, returnedJSON: IRole) => {
        returnedJSON.id = currentDoc._id;
        delete returnedJSON._id;
        delete returnedJSON.__v;
      },
    },
  }
);

export const Role = model<IRole>("Role", roleSchema);
