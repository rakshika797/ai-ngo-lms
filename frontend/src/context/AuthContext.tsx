"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type User = {
  id: string;
  token: string;
  role: string;
  email: string;
  name:string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (
    id: string,
    token: string,
    role: string,
    email: string,
    name: string
  ) => void;
  logout: () => void;
};

const AuthContext =
  createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id =
  localStorage.getItem("userId");

const token =
  localStorage.getItem("accessToken");

const role =
  localStorage.getItem("role");

const email =
  localStorage.getItem("email");

const name =
  localStorage.getItem("name");

if (id && token && role && email && name) {
  setUser({
    id,
    token,
    role,
    email,
    name,
  });
  setLoading(false);
}}, []);

 const login = (
  id: string,
  token: string,
  role: string,
  email: string,
  name: string
) => {
  localStorage.setItem(
    "userId",
    id
  );

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
    id,
    token,
    role,
    email,
    name,
  });
};

  const logout = () => {
  localStorage.removeItem(
    "userId"
  );

  localStorage.removeItem(
    "accessToken"
  );

  localStorage.removeItem(
    "role"
  );

  localStorage.removeItem(
    "email"
  );

  localStorage.removeItem(
    "name"
  );

  setUser(null);
};

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
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