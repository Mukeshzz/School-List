import { connect } from "@/config/db";
import { NextResponse } from "next/server";

// connect();

export async function DELETE(req) {
  try {
    const connection = await connect();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing school ID" }, { status: 400 });
    }

    const [result] = await connection.query(
      `DELETE FROM schoolLists WHERE id = ?`,
      [id]
    );
    console.log(result);

    return NextResponse.json(
      { message: "School Deleted Successfully", data: result },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error deleting school:", error);
    return NextResponse.json({ error: "Failed to delete school" }, { status: 500 });
  }
}
