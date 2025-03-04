import { timeStamp } from "console";
import mongoose, { Document } from "mongoose";

export interface IimageModel extends Document {
  imageUrl: String;
  extractedText: String;
}

const ImageSchema = new mongoose.Schema(
  {
    imageUrl: {type:String},
    extractedText: {type:String},
  },
  { timestamps: true }
);

export default mongoose.model<IimageModel>("Image", ImageSchema);
