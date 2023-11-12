import { createContext } from 'react';

export const UserLoggedIn = createContext({
  isLogedIn: false,
  setTheme: (isLogedIn) => {},
});