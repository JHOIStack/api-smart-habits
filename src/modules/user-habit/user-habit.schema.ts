import { z } from 'zod';

export const HabitStatusEnum = z.enum(['ACTIVO', 'PAUSADO', 'COMPLETADO', 'CANCELADO']);

export const createUserHabitSchema = z.object({
  userId: z.string().uuid({ message: 'El userId debe ser un UUID válido' }),
  habitId: z.string().uuid({ message: 'El habitId debe ser un UUID válido' }),
  status: HabitStatusEnum,
  scheduledTime: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: 'scheduledTime debe tener el formato HH:mm (por ejemplo, "07:00" o "23:45")',
    }),
  completedAt: z.string().datetime().optional(),
})


export const updateUserHabitSchema = createUserHabitSchema.partial();

export const userHabitIdSchema = z.object({
  id: z.string().uuid({ message: 'El ID debe ser un UUID válido' }),
});

export type CreateUserHabitDto = z.infer<typeof createUserHabitSchema>;
export type UpdateUserHabitDto = z.infer<typeof updateUserHabitSchema>;
