import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import Order from "../../../../models/order";
export async function POST(req) {
    try {
        
        await connectMongoDB();
        const {email}= await req.json();
        const order = await Order.findOne({email}).select("_id");
        console.log("Order: ", order);
        
        return NextResponse.json({order});

    } catch(error) {
        console.log(error);
    }
}