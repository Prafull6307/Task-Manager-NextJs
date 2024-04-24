import { Task } from "@/app/modules/task";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest,{params}){
     const{userId}=params;

     try {
        const tasks=await Task.find({
          userId:userId,
        }) 
        return NextResponse.json(tasks); 
     } catch (error) {
         return NextResponse.json({message:"Error in finding tasks",succcess:false})   
     }
}