import { model, Schema, Document } from "mongoose";
import { IUser } from "./user.models";
import { IBed } from "./bed.models";
import { IRoom } from "./room.models";

export interface IHospital extends Document {
  administrators: IUser["_id"];
  beds: IBed["_id"];
  doctors: IUser["_id"];
  rooms: IRoom["_id"];
  totalBeds: number;
  totalRooms: number;
}

const hospitalSchema = new Schema(
  {
    administrators: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    beds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Bed",
      },
    ],
    doctors: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    rooms: [
      {
        type: Schema.Types.ObjectId,
        ref: "Room",
      },
    ],
    totalBeds: {
      type: Number,
    },
    totalRooms: {
      type: Number,
    },
  },
  {
    toJSON: {
      transform: function (document: IHospital, returnedJSON: IHospital) {
        returnedJSON.id = document._id;
        delete returnedJSON._id;
        delete returnedJSON.__v;
      },
    },
  }
);

export const Hospital = model<IHospital>("Hospital", hospitalSchema);
