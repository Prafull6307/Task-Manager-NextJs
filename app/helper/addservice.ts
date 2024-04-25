import axios from "axios";
interface TaskData {
    title: string;
    content: string;
    userId: string;
    status: string;
  }
  
  export async function addTask(data: TaskData) {
    const response = await axios.post('https://task-manager-next-js-self.vercel.app/api/tasks', data).then((response) => response.data);
  
    return response;
  }
  