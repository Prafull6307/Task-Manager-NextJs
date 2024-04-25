import axios from "axios"
import { NextResponse } from "next/server";

export async function userLogin(logindata:any){
     
     try {
           const response = await axios.post("https://task-manager-next-js-self.vercel.app/api/login",logindata).then((response)=> response.data);
            return response;
          
      
       
        } catch
         (error) {
         return NextResponse.json({
          message:"Error in fetching data"
         })
        }
      
}
export async function dologOut(){
     
  try {
        const response = await axios.post("https://task-manager-next-js-self.vercel.app/api/logout").then((response)=> response.data);
         return await response;
       
   
    
     } catch
      (error) {
       console.error('Error fetching data:', error);
     }
   
}