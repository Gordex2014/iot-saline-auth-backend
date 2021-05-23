import { model, Schema, Document } from "mongoose";
import { IBed } from "./bed.models";
import { IIotDevice } from "./iotDevice.models";
import { IUser } from "./user.models";

export interface IIntravenousTheraphy extends Document {
  bedId: IBed["_id"];
  iotDevice: IIotDevice["_id"];
  appliedBy: IUser["_id"];
  dateFrom: Date;
  dateTo: Date;
  injectionApplied: boolean;
  fluidType: string;
  punzocadType: string;
  contentMl: number;
}

const intravenousTheraphySchema = new Schema(
  {
    bedId: {
      type: Schema.Types.ObjectId,
      ref: "Bed",
      required: [true, "Bed id is required"],
    },
    iotDevice: {
      type: Schema.Types.ObjectId,
      ref: "IotDevice",
      required: [true, "IotDevice id is required"],
    },
    appliedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Theraphy applier id is required"],
    },
    dateFrom: {
      type: Date,
      required: [true, "Date from is required"],
      default: Date.now(),
    },
    dateTo: {
      type: Date,
      required: [true, "Date to is required"],
    },
    injectionApplied: {
      type: Boolean,
      required: true,
      default: false,
    },
    fluidType: {
      type: String,
      required: [true, "Fluid type is necesary"],
    },
    punzocadType: {
      type: String,
      required: [true, "Punzocad type is required"],
    },
    contentMl: {
      type: Number,
      required: [true, "Fluid content in ml is required"],
    },
  },
  {
    toJSON: {
      transform: function (
        document: IIntravenousTheraphy,
        returnedJSON: IIntravenousTheraphy
      ) {
        returnedJSON.id = document._id;
        delete returnedJSON._id;
        delete returnedJSON.__v;
      },
    },
  }
);

export const IntravenousTheraphy = model<IIntravenousTheraphy>(
  "IntravenousTheraphy",
  intravenousTheraphySchema
);
