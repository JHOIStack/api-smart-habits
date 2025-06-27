import prisma from '../../lib/prisma';
import { CreateInteractionDto, UpdateInteractionDto } from './interaction.schema';

export const interactionService = {
  getAll: (limit?: number) =>
    prisma.interaction.findMany({
      ...(limit ? { take: limit } : {}),
      include: {
        user: true,
      },
    }),

  getById: (id: string) =>
    prisma.interaction.findUnique({
      where: { id },
      include: {
        user: true,
      },
    }),

  create: (data: CreateInteractionDto) =>
    prisma.interaction.create({
      data,
    }),

  update: (id: string, data: Partial<UpdateInteractionDto>) =>
    prisma.interaction.update({
      where: { id },
      data,
    }),

  delete: (id: string) =>
    prisma.interaction.delete({
      where: { id },
    }),
};
