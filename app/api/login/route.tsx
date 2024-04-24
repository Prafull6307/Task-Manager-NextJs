
import dbconnection from "@/app/database/db";
import { User } from "@/app/modules/user";
import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';
import {NextRequest, NextResponse } from "next/server";



dbconnection();

export async function POST(request:NextRequest)


{
  const{email,password}= await request.json();

   try {
     
     const user= await User.findOne({
          email:email,
     });
     
   if(user==null){
    throw new Error("user not found !!");
 }

 const matched=bcrypt.compareSync(password,user.password);

 if(!matched){
     throw new Error("Password not found!!");

 }
 

 const token= jwt.sign({
     _id:user._id,
     name:user.name
   },'asdgfdfgfdgrdfg');

   const res=NextResponse.json({message:"success",success:true,user:user})
   res.cookies.set("authtoken",token,{httpOnly:true,maxAge:60*10})
   
     return res;

     
   } catch (error) {
     return Response.json({
          message:"Error occurs",error,
          success:false
     })
     
   }
}