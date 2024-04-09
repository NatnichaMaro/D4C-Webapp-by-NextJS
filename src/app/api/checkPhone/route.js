import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import Order from "../../../../models/order";
export async function POST(req) {
    try {
        
        await connectMongoDB();
        const {phone}= await req.json();
        const orderp = await Order.findOne({phone}).select("_id");
        console.log("Phone: ", orderp);
        
        return NextResponse.json({orderp});

    } catch(error) {
        console.log(error);
    }
}