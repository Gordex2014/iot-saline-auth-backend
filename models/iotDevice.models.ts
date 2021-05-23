import { model, Schema, Document } from "mongoose";
import { IGroup } from "./group.models";

export interface IIotDevice extends Document {
  name: string;
  memorySpace: number;
  batteryCapacity: number;
  installed: boolean;
  group: IGroup["_id"];
}

const iotDeviceSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Group name is required"],
    },
    memorySpace: {
      type: Number,
    },
    batteryCapacity: {
      type: Number,
    },
    installed: {
      type: Boolean,
      required: [true, "Installation status is required"],
      default: false,
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: [true, "Group id is required"],
    },
  },
  {
    toJSON: {
      transform: function (document: IIotDevice, returnedJSON: IIotDevice) {
        returnedJSON.id = document._id;
        delete returnedJSON._id;
        delete returnedJSON.__v;
      },
    },
  }
);

export const IotDevice = model<IIotDevice>("IotDevice", iotDeviceSchema);
