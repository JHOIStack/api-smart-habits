import prisma from '../../lib/prisma'
import { CreateProfileDto, UpdateProfileDto } from './profile.schema'

export const profileService = {
  getAll: (limit?: number) =>
    prisma.profile.findMany({
      ...(limit ? { take: limit } : {}),
      include: {
        user: true,
      },
    }),

  getById: (id: string) =>
    prisma.profile.findUnique({
      where: { id },
      include: {
        user: true,
      },
    }),

  create: (data: CreateProfileDto) =>
    prisma.profile.create({
      data,
    }),

  update: (id: string, data: Partial<UpdateProfileDto>) =>
    prisma.profile.update({
      where: { id },
      data,
    }),

  delete: (id: string) =>
    prisma.profile.delete({
      where: { id },
    }),
}
