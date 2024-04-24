"use client";
import React, { useContext, useEffect, useState } from 'react';
import { Taskdata } from '../helper/taskservice';
import UserContext from '@/context/userContext';
import { dodelete } from '../helper/deleteservice';
import { toast } from 'react-toastify';

interface Task {
  _id: string;
  title: string;
  content: string;
  status: string;
  
}

function ShowTask() {
  const [usertasks, setUserTasks] = useState<Task[]>([]); 
  const context = useContext(UserContext);

  useEffect(() => {
    async function load(userId: string) {
      try {
        const tasks = await Taskdata(userId);
        setUserTasks(tasks); 
        console.log(tasks);
      } catch (error) {
        console.log(error);
      }
    }

    if (context && context.user && context.user._id) { 
      load(context.user._id);
    }
  }, [context]);

  const deleteTask = async(taskId: string) => {
     try {
          const result= await dodelete(taskId);
          console.log(result)
         const newTask= usertasks.filter((task)=>task._id!==taskId)
          setUserTasks(newTask);
          toast.success("Task deleted successfully")
     } catch (error) {
          toast.error("Failed in deleting task")
     }
  };

  if (!Array.isArray(usertasks)) {
    return <div>Loading...</div>;
  }

  return (
    <>
       <div className="bg-gray-100 min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Tasks List({usertasks.length})</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {usertasks.map((task) => (
              <div 
                key={task._id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className={`p-6 ${task.status === 'completed' ? 'bg-green-400 text-white' : 'bg-gray-400 text-white'}`}>
                  <div className="mb-4">
                    <div className="block rounded-md shadow-md p-2 bg-white">
                      <span className="text-sm text-gray-400 font-semibold">Title:</span>
                      <span className="text-sm text-gray-700 font-bold ml-2">{task.title}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="block rounded-md shadow-md p-2 bg-white">
                      <span className="text-sm text-gray-400 font-semibold">Content:</span>
                      <span className="text-sm text-gray-700 ml-2">{task.content}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="block rounded-md shadow-md p-2 bg-white">
                      <span className="text-sm text-gray-700 font-semibold ml-2">Author:</span>
                      <span className="text-sm text-gray-700 font-bold ml-2">
                      {context && context.user ? context.user.name : 'Loading...'} {/* Add null check here */}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center bg-gray-200">
                  <span className={`text-sm font-semibold rounded-full px-4 py-2 ${task.status === 'completed' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {task.status}
                  </span>
                  <button 
                    className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition-colors duration-300 ease-in-out"
                    onClick={() => deleteTask(task._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowTask;
