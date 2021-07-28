import mongoose from "mongoose"
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
  name: { type: String, required: true },
  due_date: { type: String, required: true },
  complete: {type: String, required: true},
},
{timestamps: true}
)
export default mongoose.model("ToDo", ToDoSchema)