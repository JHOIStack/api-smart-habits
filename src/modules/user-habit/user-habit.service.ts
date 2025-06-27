import prisma from '../../lib/prisma';

export const userHabitService = {
  getAll: (limit? : number) => prisma.userHabit.findMany({
    ...(limit ? { take: limit } : {}),
  }),
};
