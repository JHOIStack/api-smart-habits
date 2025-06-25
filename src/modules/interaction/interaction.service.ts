import prisma from '../../lib/prisma';

export const interactionService = {
  getAll: () => prisma.interaction.findMany(),
  
};
