/** @format */

// context/UserProvider.tsx
"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import axios from "axios";

interface User {
  _id: string;
  name: string;
  // Add other user properties here
}

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserProvider: React.FC<any> = ({ children }) => {
  const [user, setUser] = useState<User>({ _id: "", name: "" }); // Updated the user state type

  useEffect(() => {
    async function userData() {
      try {
        const data = await axios
          .get("http://localhost:3000/api/current")
          .then((response) => response.data);

        setUser({ ...data });
      } catch (error) {
        console.log("Error in fetching");
      }
    }

    userData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
