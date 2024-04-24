import { createContext } from 'react';

interface User {
  _id: string;
  name: string;
  // Add other user properties here
}

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;
