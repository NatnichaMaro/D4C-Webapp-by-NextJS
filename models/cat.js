import { ObjectId } from "mongodb";
import mongoose, {Schema} from "mongoose";

const catSchema = new Schema(
    {
        catname: {
            type: String,
            required: true
        },
        owner: {
            type: ObjectId,
            required: false
        },
        role: {
            type: String,
            required: false,
            default: "cat"
        }
    },
    {timestamps: true}
)

const Cat = mongoose.models.Cat || mongoose.model("Cat", catSchema);
export default Cat;