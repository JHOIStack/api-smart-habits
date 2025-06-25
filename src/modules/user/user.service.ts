import prisma from '../../lib/prisma';
import { CreateUserDto } from './user.schema';

export const userService = {
  getAll: () => prisma.user.findMany(),

  getById: (id: string) => prisma.user.findUnique({ where: { id } }),

  createUser: (userData: CreateUserDto) => prisma.user.create({ data: userData }),

  updateUser: (id: string, userData: Partial<CreateUserDto>) =>
    prisma.user.update({ where: { id }, data: userData }),

  deleteUser: (id: string) => prisma.user.delete({ where: { id } }),
};
