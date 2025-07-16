import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "@shared/api";

// In-memory user storage (replace with database in production)
interface StoredUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
}

class UserStore {
  private users: Map<string, StoredUser> = new Map();
  private emailToId: Map<string, string> = new Map();
  private jwtSecret =
    process.env.JWT_SECRET || "your-secret-key-change-in-production";

  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    // Check if user already exists
    if (this.emailToId.has(email.toLowerCase())) {
      throw new Error("User with this email already exists");
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    const user: StoredUser = {
      id,
      name,
      email: email.toLowerCase(),
      passwordHash,
      createdAt: new Date(),
    };

    // Store user
    this.users.set(id, user);
    this.emailToId.set(email.toLowerCase(), id);

    // Return public user data
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const userId = this.emailToId.get(email.toLowerCase());
    if (!userId) {
      return null;
    }

    const user = this.users.get(userId);
    if (!user) {
      return null;
    }

    // Check password
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      return null;
    }

    // Return public user data
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }

  generateToken(userId: string): string {
    return jwt.sign({ userId }, this.jwtSecret, { expiresIn: "7d" });
  }

  verifyToken(token: string): { userId: string } | null {
    try {
      const decoded = jwt.verify(token, this.jwtSecret) as { userId: string };
      return decoded;
    } catch (error) {
      return null;
    }
  }

  getUserById(id: string): User | null {
    const user = this.users.get(id);
    if (!user) {
      return null;
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
}

export const userStore = new UserStore();
