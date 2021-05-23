import { model, Schema, Document } from "mongoose";
import { IIntravenousTheraphy } from "./intravenousTherapy.models";
import { IUser } from "./user.models";

export interface IDripAppointment extends Document {
  duration: number;
  frequency: number;
  intravenousTherapyId: IIntravenousTheraphy["_id"];
  doctorId: IUser["_id"];
}

const dripAppointmentSchema = new Schema(
  {
    duration: {
      type: Number,
      required: [true, "Duration is required"],
    },
    frequency: {
      type: Number,
      required: [true, "Frequency is required"],
    },
    intravenousTherapyId: {
      type: Schema.Types.ObjectId,
      ref: "IntravenousTheraphy",
      required: [true, "Intravenous theraphy id is required"],
    },
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Doctor id is required"],
    },
  },
  {
    toJSON: {
      transform: function (
        document: IDripAppointment,
        returnedJSON: IDripAppointment
      ) {
        returnedJSON.id = document._id;
        delete returnedJSON._id;
        delete returnedJSON.__v;
      },
    },
  }
);

export const DripAppointment = model<IDripAppointment>(
  "DripAppointment",
  dripAppointmentSchema
);
