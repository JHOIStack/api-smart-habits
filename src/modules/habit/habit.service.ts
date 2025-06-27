import prisma from '../../lib/prisma';

export const habitService = {
  getAll: (limit?: number) => prisma.habit.findMany({
    ...(limit ? { take: limit } : {}),
  }),

  count: () => prisma.habit.count(),
};
