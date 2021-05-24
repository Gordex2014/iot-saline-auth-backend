import { model, Schema, Document } from "mongoose";
import { IRoom } from "./room.models";

export interface IBed extends Document {
  roomId: IRoom["_id"];
  bedNumber: number;
  locationReference: string;
}

const bedSchema = new Schema(
  {
    roomId: {
      type: Schema.Types.ObjectId,
      ref: "Room",
      required: [true, "Room id is required"],
    },
    bedNumber: {
      type: Number,
      required: [true, "Bed number is required"],
    },
    locationReference: {
      type: String,
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

export const Bed = model<IBed>("Bed", bedSchema);
