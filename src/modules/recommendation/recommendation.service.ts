import prisma from '../../lib/prisma';

export const recommendationService = {
  getAll: (limit?: number) => prisma.recommendation.findMany({
    ...(limit ? { take: limit } : {}),
  }),
};
