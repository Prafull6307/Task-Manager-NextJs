/** @format */

"use client";

import React from "react";
import Image from "next/image";
import Registersvf from "../assets/register.svg";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { userRegister } from "../helper/userregister";

function RegisterPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });
  async function evenRegister(event) {
    event.preventDefault();

    if (data.name.trim() === "" || data.name == null) {
      toast.warn("Name is Required", {
        position: "top-center",
      });

      return;
    }
    try {
      const result = await userRegister(data);

      toast.success("User Registered Successfully", {
        position: "top-center",
      });
      setData({ name: "", email: "", password: "", about: "" });
    } catch (error) {
      console.log("failed to create user");
      toast.error("Please Try again");
    }
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto   ">
          <Image
            src={Registersvf}
            priority={true}
            alt="#auth"
            style={{
              width: "10%",
            }}
          />
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
            <div className="p-6 space-y-4  md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form
                className="space-y-4 md:space-y-6 "
                action="#"
                onSubmit={evenRegister}
              >
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="user-name"
                    id="user-name"
                    placeholder="Enter Your name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(event) => {
                      setData({
                        ...data,
                        name: event.target.value,
                      });
                    }}
                    value={data.name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={(event) => {
                      setData({
                        ...data,
                        email: event.target.value,
                      });
                    }}
                    value={data.email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(event) => {
                      setData({
                        ...data,
                        password: event.target.value,
                      });
                    }}
                    value={data.password}
                  />
                </div>

                <div>
                  <label
                    htmlFor="about"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    About
                  </label>
                  <textarea
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    rows={8}
                    onChange={(event) => {
                      setData({
                        ...data,
                        about: event.target.value,
                      });
                    }}
                    value={data.about}
                  ></textarea>
                </div>
                <div className="flex justify-center space-x-2">
                  <div>
                    <button
                      type="submit"
                      className=" text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Register
                    </button>
                  </div>
                  <button
                    className=" text-white bg-red-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={(event) =>
                      setData({
                        name: "",
                        email: "",
                        password: "",
                        about: "",
                      })
                    }
                  >
                    Reset
                  </button>
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
