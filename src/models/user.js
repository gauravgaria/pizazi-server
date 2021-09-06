import { string } from "joi";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "customer",
    },
    loginWith: {
      type: String,
      default: "pizazi",
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema, "users");
