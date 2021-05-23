import { model, Schema, Document } from "mongoose";

export interface IGroup extends Document {
  name: string;
}

const groupSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Group name is required"],
    },
  },
  {
    toJSON: {
      transform: function (document: IGroup, returnedJSON: IGroup) {
        returnedJSON.id = document._id;
        delete returnedJSON._id;
        delete returnedJSON.__v;
      },
    },
  }
);

export const Group = model<IGroup>("Group", groupSchema);
