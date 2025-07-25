import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleSignUp, handleSignIn, handleGetUser } from "./routes/auth";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  // Auth API routes
  app.post("/api/auth/signup", handleSignUp);
  app.post("/api/auth/signin", handleSignIn);
  app.get("/api/auth/user", handleGetUser);

  return app;
}
