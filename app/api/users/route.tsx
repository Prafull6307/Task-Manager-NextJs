import dbconnection from "@/app/database/db";
import { User } from "@/app/modules/user";
import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";


dbconnection()
 export async function GET(request:NextRequest) {
  const users = await User.find().maxTimeMS(30000);

  return Response.json(users);
 }

 export async function POST(request:NextRequest){
     const {name,email,password,about} = await request.json();

     const user =new User({
           name,
           email,
           password,
           about,
     })
     user.password= await bcrypt.hash(user.password,10);
     const createdUser= await user.save();
     try {
          return Response.json({
               message:"Task is created",createdUser
          })
          
     } catch (error) {
          console.log("Failed to create Task")
          return Response.json({
               message:"failed"
          })
     }

}