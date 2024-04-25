

import axios from "axios"

export async function userRegister(yourdata:any){
     try {
          const reponse = await axios.post("https://task-manager-next-js-self.vercel.app/api/users", yourdata).then((response)=> response.data);
            return reponse;
          
      
       
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      
}

