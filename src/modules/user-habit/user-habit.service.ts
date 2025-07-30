import prisma from "../../lib/prisma";
import { CreateUserHabitDto, UpdateUserHabitDto } from "./user-habit.schema";

export const userHabitService = {
  getAll: (limit?: number) =>
    prisma.userHabit.findMany({
      ...(limit ? { take: limit } : {}),
      include: {
        user: true,
        habit: true,
      },
    }),

  getById: (id: string) =>
    prisma.userHabit.findUnique({
      where: { id },
      include: {
        user: true,
        habit: true,
      },
    }),

  getByUserId: (userId: string) =>
    prisma.userHabit.findMany({
      where: { userId },
      include: {
        // user: true,
        habit: true,
      },
    }),

  create: (data: CreateUserHabitDto) =>
    prisma.userHabit.create({
      data,
    }),

  update: (id: string, data: Partial<UpdateUserHabitDto>) =>
    prisma.userHabit.update({
      where: { id },
      data,
    }),

  delete: (id: string) =>
    prisma.userHabit.delete({
      where: { id },
    }),
};
