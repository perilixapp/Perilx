import React, { createContext, useContext, useState, useEffect } from "react";
import { User, AuthResponse, SignUpRequest, SignInRequest } from "@shared/api";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signUp: (data: SignUpRequest) => Promise<AuthResponse>;
  signIn: (data: SignInRequest) => Promise<AuthResponse>;
  signOut: () => void;
  checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const signUp = async (data: SignUpRequest): Promise<AuthResponse> => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result: AuthResponse = await response.json();

    if (result.success && result.user && result.token) {
      setUser(result.user);
      localStorage.setItem("auth_token", result.token);
    }

    return result;
  };

  const signIn = async (data: SignInRequest): Promise<AuthResponse> => {
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result: AuthResponse = await response.json();

    if (result.success && result.user && result.token) {
      setUser(result.user);
      localStorage.setItem("auth_token", result.token);
    }

    return result;
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("auth_token");
  };

  const checkAuthStatus = async () => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result: AuthResponse = await response.json();

      if (result.success && result.user) {
        setUser(result.user);
      } else {
        // Token is invalid, remove it
        localStorage.removeItem("auth_token");
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      localStorage.removeItem("auth_token");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const value: AuthContextType = {
    user,
    isLoading,
    signUp,
    signIn,
    signOut,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
