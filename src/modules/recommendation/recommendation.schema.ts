import { z } from 'zod'

export const recommendationIdSchema = z.object({
  id: z.string().uuid({ message: 'El ID debe ser un UUID válido' }),
})

export const createRecommendationSchema = z.object({
  userId: z.string().uuid({ message: 'El userId debe ser un UUID válido' }),
  message: z.string().min(1, 'El mensaje es obligatorio'),
  shownTime: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: 'shownTime debe tener el formato HH:mm (ejemplo: "07:30")',
    }),
  createdAt: z.string().datetime({ message: 'createdAt debe tener formato ISO válido' }).optional(),
})

export const updateRecommendationSchema = createRecommendationSchema.partial()

export type CreateRecommendationDto = z.infer<typeof createRecommendationSchema>
export type UpdateRecommendationDto = z.infer<typeof updateRecommendationSchema>
