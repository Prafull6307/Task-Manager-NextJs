/** @format */

import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true,
  } ,
  about:{
    type:String,
    requird:true,
  },
  // profileURL:{
  //   type:String
  // }
});
  

  export const User= mongoose.models.users||mongoose.model("users",UserSchema);


  