/** @format */

"use client";
import React, { useState } from "react";
import Loginsvg from "../assets/login.svg";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { userLogin } from "../helper/loginservice";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";
import { useContext } from "react";

function LoginPage() {
  const router = useRouter();
  const context = useContext(UserContext);

  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });

  async function submitData(e) {
    e.preventDefault();
    if (logindata.email.trim() === "" || logindata.password.trim() === "") {
      toast.warn("Name is Required", {
        position: "top-center",
      });

      return;
    }
    try {
      const result = await userLogin(logindata);

      toast.success("User Login Successfully", {
        position: "top-center",
      });
      context.setUser(result.user);
      router.push("/profile/user");
    } catch (error) {
      toast.error("Please Try again");
    }
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 pt-2 pb-2">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Image src={Loginsvg} priority={true} style={{ width: "20%" }} alt="Description"  />
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={submitData}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={(e) =>
                      setLogindata({
                        ...logindata,
                        email: e.target.value,
                      })
                    }
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
                    onChange={(e) =>
                      setLogindata({ ...logindata, password: e.target.value })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="flex justify-center">
                  {" "}
                  <button
                    type="submit"
                    className=" text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
                  >
                    Login
                  </button>
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
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

export default LoginPage;
