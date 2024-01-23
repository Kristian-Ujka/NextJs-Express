import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";
import axiosInstance from "@/axios/axiosInstance";

interface AuthContextProps {
  token: string;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    typeof window !== "undefined" ? localStorage.getItem("token") : null
  );
  const login = async (username: string, password: string) => {
    try {
      await axiosInstance
        .post("/api/auth", { username, password })
        .then((response) => {
          const { token } = response.data;
          setToken(token);
          localStorage.setItem("token", token);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token: token!, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
