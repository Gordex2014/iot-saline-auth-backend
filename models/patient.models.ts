import { model, Schema, Document } from "mongoose";
import { IUser } from "./user.models";
import { Gender, PatientRole } from "../types";
import { IRecord } from "./record.models";

export interface IPatient extends Document {
  createdBy: IUser["_id"];
  dateOfBirth: Date;
  firstName: string;
  gender: Gender;
  id: string;
  imageUrl: string;
  lastModifiedBy: IUser["_id"];
  lastName: string;
  mobileNumber: string;
  record?: IRecord["_id"];
  roles?: PatientRole;
  status?: boolean;
}

const patientSchema = new Schema(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "it is necessary to know who registered the patient"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "it is necessary to know when the patient was born"],
    },
    firstName: {
      type: String,
      required: [true, "First name is mandatory"],
    },
    gender: {
      type: String,
      required: [true, "it is necessary to know the gender of the patient"],
    },
    imageUrl: {
      type: String,
    },
    lastModifiedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
    record: {
      type: Schema.Types.ObjectId,
      ref: "Record",
    },
    roles: {
      type: String,
      default: "PATIENT_ROLE",
      enum: ["PATIENT_ROLE"],
      required: [true, "Role is required"],
    },
    status: {
      type: Boolean,
      required: [true, "Patient status is required"],
      default: true,
    },
  },
  {
    toJSON: {
      transform: function (document: IPatient, returnedJSON: IPatient) {
        returnedJSON.id = document._id;
        delete returnedJSON.status;
        delete returnedJSON.roles;
        delete returnedJSON._id;
        delete returnedJSON.__v;
      },
    },
  }
);

export const Patient = model<IPatient>("Patient", patientSchema);
