import prisma from '../../lib/prisma';

export const userHabitService = {
  getAll: () => prisma.userHabit.findMany(),
};
