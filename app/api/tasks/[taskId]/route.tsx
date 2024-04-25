import { Task } from "@/app/modules/task";
import { NextRequest, NextResponse } from "next/server";





export async function DELETE(request:NextRequest,{params}:{ params: { taskId: string } }){
try {
     const {taskId}=params;
      await Task.deleteOne({
          _id:taskId,
      });
      return NextResponse.json({
          message:"Task Deleted",
          success:true
      })

} catch (error) {
     console.log("Error in deleting");
}
}