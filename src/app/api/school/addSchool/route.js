// /src/app/api/school/add/route.js

import { connect } from "@/config/db";

import { NextResponse } from "next/server";

connect();

export async function POST(req) {
  try {

    const connection = await connect();
    const { name, address, city, state, contact, image, email_id } = await req.json();
    

    const [result] = await connection.query(
      `INSERT INTO schoolLists ( name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, address, city, state, contact, image, email_id]      
    );
    console.log(result)

    return NextResponse.json(
      { message: "School added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to add school" },
      { status: 500 }
    );
  }
}
