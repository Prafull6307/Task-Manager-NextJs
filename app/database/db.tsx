 import mongoose from "mongoose";

 export default async function dbconnection(){
    try{
     const {connection}=await mongoose.connect("mongodb+srv://prafullsrivastavaug20:Hs04LEB4UYD1Lhqb@cluster0.djezox2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
     console.log("database connected..");
     // console.log(connection);
    }
    catch(error){
     console.log("Error connecting database..",error);
    }
    
 }
