import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

export default mongoose.model<UserDocument>("User", UserSchema);
