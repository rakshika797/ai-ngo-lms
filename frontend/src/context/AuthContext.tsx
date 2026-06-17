"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type User = {
  token: string;
  role: string;
  email: string;
  name:string;
};

type AuthContextType = {
  user: User | null;
  login: (token: string, role: string, email: string, name: string) => void;
  logout: () => void;
};

const AuthContext =
  createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] =
    useState<User | null>(null);

  useEffect(() => {
    const token =
  localStorage.getItem("accessToken");

const role =
  localStorage.getItem("role");

const email =
  localStorage.getItem("email");

const name =
  localStorage.getItem("name");

if (token && role && email && name) {
  setUser({
    token,
    role,
    email,
    name,
  });
}}, []);

 const login = (
  token: string,
  role: string,
  email: string,
  name: string
) => {
  localStorage.setItem(
    "accessToken",
    token
  );

  localStorage.setItem(
    "role",
    role
  );

  localStorage.setItem(
    "email",
    email
  );

  localStorage.setItem("name", name);

  setUser({
    token,
    role,
    email,
    name,
  });
};

  const logout = () => {
  localStorage.removeItem(
    "accessToken"
  );

  localStorage.removeItem(
    "role"
  );

  localStorage.removeItem(
    "email"
  );

  setUser(null);
};

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return context;
};