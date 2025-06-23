import prisma from '../../lib/prisma';

export const habitService = {
  getAll: () => prisma.habit.findMany(),
};
