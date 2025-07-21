import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateToken } from "./auth.service";
import { AuthRequest } from "../../middlewares/auth.middlware";

const prisma = new PrismaClient();

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    res.status(401).json({ message: "Invalid credentials" });
    return 
  }
  const token = generateToken(user);
  res.json({ token, role: user.role });
}

export async function profile(req: AuthRequest, res: Response) {
  const userId = req.user?.id;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return 
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true, email: true, role: true },
  });

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return 
  }

  res.json(user);
}