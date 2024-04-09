import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import Order from "../../../../models/order";

export async function POST(req) {
    try {
        const {name, email, phone } = await req.json();

        await connectMongoDB();
        await Order.create({name, email, phone });

        return NextResponse.json({message: "Ordered."}, {status:201});
        
    } catch(error) {
        return NextResponse.json({ message: "An error occured while Ordering"}, {status: 500});
    }
}