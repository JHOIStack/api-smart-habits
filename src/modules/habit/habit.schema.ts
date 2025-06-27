import { z } from 'zod';

export const HabitCategoryEnum = z.enum([
  'ENERGIA',
  'AGUA',
  'RESIDUOS',
  'MOVILIDAD',
  'CONSUMO',
]);

export const habitIdSchema = z.object({
  id: z.string().uuid({ message: 'El ID debe ser un UUID válido' }),
});

export const createHabitSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  category: HabitCategoryEnum,
  description: z.string().min(5, 'La descripción debe tener al menos 5 caracteres'),
});

export const updateHabitSchema = createHabitSchema.partial();

export type CreateHabitDto = z.infer<typeof createHabitSchema>;
