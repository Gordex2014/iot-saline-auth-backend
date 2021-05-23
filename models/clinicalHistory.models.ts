import { model, Schema, Document } from "mongoose";
import { IPatient } from "./patient.models";
import { IRecord } from "./record.models";

export interface IClinicalHistory extends Document {
  patientId: IPatient["_id"];
  records: IRecord["_id"][];
}

const clinicalHistorySchema = new Schema(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: [true, "Patient id is required"],
    },
    records: {
      type: [Schema.Types.ObjectId],
      ref: "Record",
    },
  },
  {
    toJSON: {
      transform: function (
        document: IClinicalHistory,
        returnedJSON: IClinicalHistory
      ) {
        returnedJSON.id = document._id;
        delete returnedJSON._id;
        delete returnedJSON.__v;
      },
    },
  }
);

export const ClinicalHistory = model<IClinicalHistory>(
  "ClinicalHistory",
  clinicalHistorySchema
);
