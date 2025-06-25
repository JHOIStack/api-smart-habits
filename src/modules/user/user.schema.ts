import { z } from 'zod';

export const RegionEnum = z.enum([
  'NORTE',
  'CENTRO',
  'SUR',
  'OCCIDENTE',
  'SURESTE',
  'CDMX',
  'INTERNACIONAL',
]);

export const userIdSchema = z.object({
  id: z.string().uuid({ message: 'El ID debe ser un UUID válido' }),
});

export const createUserSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email no válido'),
  age: z.number().int().min(0, 'La edad debe ser positiva'),
  region: RegionEnum.optional(),
});

export const updateUserSchema = createUserSchema.partial();

export type CreateUserDto = z.infer<typeof createUserSchema>;
