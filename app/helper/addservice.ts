import axios from "axios"

export async function addTask(data){
    const response=  await axios.post("http://localhost:3000/api/tasks",data).then((response=>response.data));
 
    return response;

}


