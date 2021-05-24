import { model, Schema, Document } from "mongoose";

export interface IRoom extends Document {
  name: string;
  floor: number;
  building: string;
  locationReference: string;
}

const roomSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Room name is required"],
    },
    floor: {
      type: Number,
      required: [true, "Floor number is required"],
    },
    building: {
      type: String,
      required: [true, "Building name is required"],
    },
    locationReference: {
      type: String,
    },
  },
  {
    toJSON: {
      transform: function (document: IRoom, returnedJSON: IRoom) {
        returnedJSON.id = document._id;
        delete returnedJSON._id;
        delete returnedJSON.__v;
      },
    },
  }
);

export const Room = model<IRoom>("Room", roomSchema);
