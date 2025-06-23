import prisma from '../../lib/prisma';

export const profileService = {
  getAll: () => prisma.profile.findMany(),
};
