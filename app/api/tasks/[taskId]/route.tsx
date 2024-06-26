import { Task } from "@/app/modules/task";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }: { params: { taskId: any } }) {
  try {
    const { taskId } = params;
    await Task.deleteOne({
      _id: taskId,
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
