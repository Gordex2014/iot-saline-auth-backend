import { model, Schema, Document } from "mongoose";
import { IIotDevice } from "./iotDevice.models";

export interface ILog extends Document {
  iotDeviceId: IIotDevice["_id"];
  dateTime: Date;
  memoryOccupied: number;
  batteryRemaining: number;
  weightSensor: number;
}

const logSchema = new Schema(
  {
    iotDeviceId: {
      type: Schema.Types.ObjectId,
      ref: "IotDevice",
      required: [true, "IotDevice id is required"],
    },
    dateTime: {
      type: Date,
      required: [true, "Date time is required"],
      default: Date.now(),
    },
    memoryOccupied: {
      type: Number,
      required: [true, "Memory occupied is required"],
    },
    batteryRemaining: {
      type: Number,
      required: [true, "Battery remaining is required"],
    },
    weightSensor: {
      type: Number,
      required: [true, "Sensor weight is required"],
    },
  },
  {
    toJSON: {
      transform: function (document: ILog, returnedJSON: ILog) {
        returnedJSON.id = document._id;
        delete returnedJSON._id;
        delete returnedJSON.__v;
      },
    },
  }
);

export const Log = model<ILog>("Log", logSchema);
