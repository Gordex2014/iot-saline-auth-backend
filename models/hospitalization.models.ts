import { model, Schema, Document } from "mongoose";
import { IBed } from "./bed.models";
import { IPatient } from "./patient.models";
import { IUser } from "./user.models";

export interface IHospitalization extends Document {
  bedId: IBed["_id"];
  patientId: IPatient["_id"];
  doctorResponsibleId: IUser["_id"];
  dateFrom: Date;
  dateTo: Date;
}

const hospitalizationSchema = new Schema(
  {
    bedId: {
      type: Schema.Types.ObjectId,
      ref: "Bed",
      required: [true, "Bed id is required"],
    },
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: [true, "Room id is required"],
    },
    doctorResponsibleId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Doctor id is required"],
    },
    dateFrom: {
      type: Date,
      required: [true, "Hospitalization start date is required"],
      default: Date.now(),
    },
    dateTo: {
      type: Date,
      required: [true, "End date is required"],
    },
  },
  {
    toJSON: {
      transform: function (document: IBed, returnedJSON: IBed) {
        returnedJSON.id = document._id;
        delete returnedJSON._id;
        delete returnedJSON.__v;
      },
    },
  }
);

export const Hospitalization = model<IHospitalization>(
  "Hospitalization",
  hospitalizationSchema
);
