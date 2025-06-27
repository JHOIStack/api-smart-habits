import prisma from '../../lib/prisma';
import { CreateHabitDto } from './habit.schema';

export const habitService = {
  getAll: (limit?: number) =>
    prisma.habit.findMany({
      ...(limit ? { take: limit } : {}),
    }),

  getById: (id: string) => prisma.habit.findUnique({ where: { id } }),

  createHabit: (habitData: CreateHabitDto) => prisma.habit.create({ data: habitData }),

  updateHabit: (id: string, habitData: Partial<CreateHabitDto>) =>
    prisma.habit.update({ where: { id }, data: habitData }),

  deleteHabit: (id: string) => prisma.habit.delete({ where: { id } }),

  count: () => prisma.habit.count(),
};
