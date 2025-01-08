import { connect } from "@/config/db";
import { NextResponse } from "next/server";

connect();

export async function GET() {
    try {
        const connection = await connect();
        
        const [result] = await connection.query("SELECT * FROM schoolLists");
        return NextResponse.json(
            { message: "Schools fetched successfully", data: result },
            { status: 201 }
          );
        
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Failed to fetch schools" },
            { status: 500}
        )
        
    }
}