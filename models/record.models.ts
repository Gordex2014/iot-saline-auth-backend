import { model, Schema, Document } from "mongoose";
import { IPatient } from "./patient.models";
import { IUser } from "./user.models";

export interface IRecord extends Document {
  patient: IPatient["_id"];
  updatedBy: IUser["_id"];
  dateTime: Date;
  medicalCondition: string;
}

const recordSchema = new Schema(
  {
    patient: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: [true, "Patient id is required"],
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Record modifier id is required"],
    },
    dateTime: {
      type: Date,
      required: [true, "Date is required"],
      default: Date.now(),
    },
    medicalCondition: {
      type: String,
      required: [true, "Medical condition is required"],
    },
  },
  {
    toJSON: {
      transform: function (document: IRecord, returnedJSON: IRecord) {
        returnedJSON.id = document._id;
        delete returnedJSON._id;
        delete returnedJSON.__v;
      },
    },
  }
);

export const Record = model<IRecord>("Record", recordSchema);
