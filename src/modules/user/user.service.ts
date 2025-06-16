import prisma from '../../lib/prisma';

export const userService = {
  getAll: () => prisma.user.findMany(),

  getById: (id: string) => prisma.user.findUnique({ where: { id } }),

//   create: (data: )
};
