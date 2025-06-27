import prisma from '../../lib/prisma';

export const interactionService = {
  getAll: (limit? :number) => prisma.interaction.findMany({
    ...(limit ? { take: limit } : {}),
  }),

};
