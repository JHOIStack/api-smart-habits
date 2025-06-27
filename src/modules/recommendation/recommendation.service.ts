import prisma from '../../lib/prisma'
import { CreateRecommendationDto, UpdateRecommendationDto } from './recommendation.schema'

export const recommendationService = {
  getAll: (limit?: number) =>
    prisma.recommendation.findMany({
      ...(limit ? { take: limit } : {}),
      include: {
        user: true,
      },
    }),

  getById: (id: string) =>
    prisma.recommendation.findUnique({
      where: { id },
      include: {
        user: true,
      },
    }),

  create: (data: CreateRecommendationDto) =>
    prisma.recommendation.create({
      data,
    }),

  update: (id: string, data: Partial<UpdateRecommendationDto>) =>
    prisma.recommendation.update({
      where: { id },
      data,
    }),

  delete: (id: string) =>
    prisma.recommendation.delete({
      where: { id },
    }),
}
