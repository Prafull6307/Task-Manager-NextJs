import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
     const response=NextResponse.json({
          message:"Logged Out !!",
          success:true,
     });
     response.cookies.set("authtoken","",{
          expires:new Date(0),

     });
    
          return response;
}