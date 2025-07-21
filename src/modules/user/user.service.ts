import prisma from '../../lib/prisma';
import bcrypt from 'bcrypt'
import { CreateUserDto } from './user.schema';

export const userService = {
  getAll: (limit?: number) =>
    prisma.user.findMany({
      ...(limit ? { take: limit } : {}),
    }),

  getById: (id: string) => prisma.user.findUnique({ where: { id } }),

  createUser: async (userData: CreateUserDto) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await prisma.user.create({
      data: { ...userData, password: hashedPassword },
    });

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },

  updateUser: (id: string, userData: Partial<CreateUserDto>) =>
    prisma.user.update({ where: { id }, data: userData }),

  deleteUser: (id: string) => prisma.user.delete({ where: { id } }),
};
