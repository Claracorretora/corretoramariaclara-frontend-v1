"use client";

import { createContext, useState } from "react";
import { LoginAdminService } from "@/services/auth.service";
import { useRouter } from "next/navigation";

interface AuthContextProps {
  isAuthenticated: boolean;
  LoginAdmin: (data: { email: string; password: string }) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  async function LoginAdmin({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      await LoginAdminService({ email, password });
      setIsAuthenticated(true);
      router.push("/admin/catalogo");
    } catch (error: any) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, LoginAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}
