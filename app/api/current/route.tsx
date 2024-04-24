import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken"; 
import { User } from "@/app/modules/user";
import dbconnection from "@/app/database/db";

dbconnection();

export async function GET(request: NextRequest) {
  const authToken = request.cookies.get("authtoken")?.value;

  if (!authToken) {
    return NextResponse.json({
      message: "Authentication token is missing",
    });
  }

  try {
    const data = jwt.verify(authToken, 'asdgfdfgfdgrdfg') as JwtPayload;

    if (!data._id) {
      return NextResponse.json({
        message: "Invalid token data",
      })
    }

    const user = await User.findById(data._id).select("-password");

    if (!user) {
      return NextResponse.json({
        message: "User not found",
      });
    }

    return NextResponse.json(user);
  
  } catch (error) {
    console.error("Error in fetching current data:", error);
    return NextResponse.json({
      message: "Error in fetching current data",
    });
  }
}
