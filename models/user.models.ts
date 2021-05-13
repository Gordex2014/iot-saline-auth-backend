import { model, Schema, Document } from "mongoose";
import { UserRole } from "../types";

export interface IUser extends Document {
  email: string;
  firstName: string;
  id: string;
  imageUrl: string;
  lastName: string;
  mobileNumber: number;
  password?: string;
  roles?: UserRole[];
  status?: boolean;
  username: string;
}

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    firstName: {
      type: String,
      required: [true, "First name is mandatory"],
    },
    imageUrl: {
      type: String,
    },
    lastName: {
      type: String,
      required: [true, "Last name is mandatory"],
    },
    mobileNumber: {
      type: Number,
      required: [true, "Mobile number is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    roles: {
      type: [String],
      required: [true, "At least one role is required"],
      default: ["USER_DOCTOR_ROLE"],
    },

    status: {
      type: Boolean,
      required: [true, "User status is required"],
      default: true,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
  },
  {
    toJSON: {
      transform: (currentDoc: IUser, returnedJSON: IUser) => {
        returnedJSON.id = currentDoc._id;
        delete returnedJSON.password;
        delete returnedJSON.roles;
        delete returnedJSON.status;
        delete returnedJSON._id;
        delete returnedJSON.__v;
      },
    },
  }
);

export const User = model<IUser>("User", userSchema);
