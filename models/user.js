import mongoose from "mongoose"
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, reqiored: true, select: false },
  },
  {timestamps: true}
)

export default mongoose.model("User", UserSchema)