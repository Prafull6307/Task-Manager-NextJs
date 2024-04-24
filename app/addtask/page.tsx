/** @format */

"use client";
import React from "react";
import Addtasksvg from "../assets/addtask.svg";
import Image from "next/image";
import { useState } from "react";
import { addTask } from "../helper/addservice";
import { toast } from "react-toastify";
function AddTask() {
  const [task, setTask] = useState({
    title: "",
    content: "",
    userId: "",
    status: "",
  });

  function taskAdded(e: React.FormEvent<HTMLFormElement>) { // Specify the type of 'e'
    e.preventDefault();
    addTask(task);
    toast.success("Task Added Successfully");
    setTask({
      title: "",
      content: "",
      userId: "",
      status: "",
    });
    console.log(task);
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto   ">
          <Image
            src={Addtasksvg}
            priority
            alt="task"
            style={{
              width: "20%",
            }}
          />
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
            <div className="p-6 space-y-4  md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Add Your Task Here
              </h1>
              <form
                className="space-y-4 md:space-y-6 "
                action="#on"
                onSubmit={taskAdded}
              >
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Your name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(event) => {
                      setTask({
                        ...task,
                        title: event.target.value,
                      });
                    }}
                    value={task.title}
                  />
                </div>

                <div>
                  <label
                    htmlFor="about"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Content
                  </label>
                  <textarea
                    id="terms"
                    aria-describedby="terms"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    rows={8}
                    onChange={(event) => {
                      setTask({
                        ...task,
                        content: event.target.value,
                      });
                    }}
                    value={task.content}
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="about"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Status
                  </label>
                  <select
                    defaultValue="option1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="status"
                    id="task_status"
                    onChange={(event) => {
                      setTask({
                        ...task,
                        status: event.target.value,
                      });
                    }}
                    value={task.status}
                  >
                    <option value="option1">---Select---</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="flex justify-center space-x-2">
                  <button
                    type="submit"
                    className=" text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Add Todo
                  </button>
                  <button
                    className=" text-white bg-red-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={(event) =>
                      setTask({
                        title: "",
                        content: "",
                        userId: "",
                        status: "",
                      })
                    }
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddTask;
