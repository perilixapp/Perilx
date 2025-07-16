import { RequestHandler } from "express";
import {
  SignUpRequest,
  SignInRequest,
  AuthResponse,
  AuthError,
} from "@shared/api";
import { userStore } from "../userStore";

export const handleSignUp: RequestHandler = async (req, res) => {
  try {
    const { name, email, password }: SignUpRequest = req.body;

    // Validate input
    if (!name || !email || !password) {
      const response: AuthError = {
        success: false,
        message: "Name, email, and password are required",
      };
      return res.status(400).json(response);
    }

    if (password.length < 6) {
      const response: AuthError = {
        success: false,
        message: "Password must be at least 6 characters long",
      };
      return res.status(400).json(response);
    }

    // Create user
    const user = await userStore.createUser(name, email, password);
    const token = userStore.generateToken(user.id);

    const response: AuthResponse = {
      success: true,
      message: "Account created successfully",
      user,
      token,
    };

    res.json(response);
  } catch (error) {
    console.error("Sign up error:", error);
    const response: AuthError = {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to create account",
    };
    res.status(400).json(response);
  }
};

export const handleSignIn: RequestHandler = async (req, res) => {
  try {
    const { email, password }: SignInRequest = req.body;

    // Validate input
    if (!email || !password) {
      const response: AuthError = {
        success: false,
        message: "Email and password are required",
      };
      return res.status(400).json(response);
    }

    // Validate user
    const user = await userStore.validateUser(email, password);
    if (!user) {
      const response: AuthError = {
        success: false,
        message: "Invalid email or password",
      };
      return res.status(401).json(response);
    }

    const token = userStore.generateToken(user.id);

    const response: AuthResponse = {
      success: true,
      message: "Signed in successfully",
      user,
      token,
    };

    res.json(response);
  } catch (error) {
    console.error("Sign in error:", error);
    const response: AuthError = {
      success: false,
      message: "Failed to sign in",
    };
    res.status(500).json(response);
  }
};

export const handleGetUser: RequestHandler = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      const response: AuthError = {
        success: false,
        message: "No token provided",
      };
      return res.status(401).json(response);
    }

    const token = authHeader.substring(7);
    const decoded = userStore.verifyToken(token);
    if (!decoded) {
      const response: AuthError = {
        success: false,
        message: "Invalid token",
      };
      return res.status(401).json(response);
    }

    const user = userStore.getUserById(decoded.userId);
    if (!user) {
      const response: AuthError = {
        success: false,
        message: "User not found",
      };
      return res.status(404).json(response);
    }

    const response: AuthResponse = {
      success: true,
      message: "User retrieved successfully",
      user,
    };

    res.json(response);
  } catch (error) {
    console.error("Get user error:", error);
    const response: AuthError = {
      success: false,
      message: "Failed to get user",
    };
    res.status(500).json(response);
  }
};
