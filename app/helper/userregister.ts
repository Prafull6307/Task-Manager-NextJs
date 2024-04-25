

import axios from "axios"

export async function userRegister(yourdata:any){
     try {
          const reponse = await axios.post("http://localhost:3000/api/users", yourdata).then((response)=> response.data);
            return reponse;
          
      
       
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      
}

