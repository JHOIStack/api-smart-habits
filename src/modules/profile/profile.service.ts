import prisma from '../../lib/prisma';

export const profileService = {
  getAll: (limit?: number) =>
    prisma.profile.findMany({
      ...(limit ? { take: limit } : {}),
    }),
};
