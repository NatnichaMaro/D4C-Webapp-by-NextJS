import mongoose, {Schema} from "mongoose";

const OrderSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

const Order = mongoose.models.order || mongoose.model("order", OrderSchema);
export default Order;