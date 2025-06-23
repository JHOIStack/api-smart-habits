import prisma from '../../lib/prisma';

export const recommendationService = {
  getAll: () => prisma.recommendation.findMany(),
};
