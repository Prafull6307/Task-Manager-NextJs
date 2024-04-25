import axios from "axios";

export async function dodelete(taskId:any){
     
     try {
           const response = await axios.delete(`https://task-manager-next-js-self.vercel.app//api/tasks/${taskId}`).then((response)=> response.data);
            return response;
          
      
       
        } catch
         (error) {
          console.error('Error fetching data:', error);
        }
      
   }