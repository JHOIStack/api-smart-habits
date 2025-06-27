import { z } from 'zod'

export const ProfileTypeEnum = z.enum([
  'ECO_PRINCIPIANTE',
  'ECO_AVANZADO',
  'ECO_EXPERTO',
])

export const profileIdSchema = z.object({
  id: z.string().uuid({ message: 'El ID debe ser un UUID válido' }),
})

export const createProfileSchema = z.object({
  userId: z.string().uuid({ message: 'El userId debe ser un UUID válido' }),
  profileType: ProfileTypeEnum,
  assignedAt: z.string().datetime({ message: 'Fecha inválida (formato ISO requerido)' }).optional(), // puede ser opcional porque tiene default
})

export const updateProfileSchema = createProfileSchema.partial()

export type CreateProfileDto = z.infer<typeof createProfileSchema>
export type UpdateProfileDto = z.infer<typeof updateProfileSchema>
