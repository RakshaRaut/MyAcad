import { createContext } from "react";

type AuthContextValue = {
  user: unknown;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
});
