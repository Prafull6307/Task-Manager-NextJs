import axios from "axios";
interface TaskData {
    title: string;
    content: string;
    userId: string;
    status: string;
  }
  
  export async function addTask(data: TaskData) {
    const response = await axios.post("http://localhost:3000/api/tasks", data).then((response) => response.data);
  
    return response;
  }
  