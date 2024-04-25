import { Task } from "@/app/modules/task";
import { NextRequest, NextResponse } from "next/server";
import { JwtPayload } from "jsonwebtoken";


export async function DELETE(request: NextRequest, { params }: { params: { taskId: string } }) {
  try {
   
    
    // Parse request body to JSON
    const body = await request.json();
    
    // Assuming data is obtained from somewhere else, such as a JWT token
    const data = body.data as JwtPayload;

    await Task.deleteOne({
      _id: data._id, // Type assertion here
    });

    return NextResponse.json({
      message: "Task Deleted",
      success: true
    });
  } catch (error) {
    console.log("Error in deleting", error);
    return NextResponse.json({
      message: "Error deleting task",
      success: false
    });
  }
}
