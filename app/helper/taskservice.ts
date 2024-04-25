import axios from 'axios'
export async function Taskdata(userId:any){
   try {
     const task=await axios.get(`https://task-manager-next-js-self.vercel.app/api/users/${userId}/tasks`).then(response=>response.data)
     return task;
     
   } catch (error) {
       console.log("Error in fetching task of a user")
   }
}