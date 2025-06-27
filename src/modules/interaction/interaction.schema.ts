import { z } from 'zod';

export const InteractionTypeEnum = z.enum(['CLICK', 'IGNORE', 'COMPLETE', 'SKIP']);

export const interactionIdSchema = z.object({
  id: z.string().uuid({ message: 'El ID debe ser un UUID válido' }),
});

export const createInteractionSchema = z.object({
  userId: z.string().uuid({ message: 'El userId debe ser un UUID válido' }),
  type: InteractionTypeEnum,
  target: z.string().min(1, 'El target es obligatorio'),
  timestamp: z
    .string()
    .datetime({ message: 'El timestamp debe tener formato ISO válido' })
    .optional(),
});

export const updateInteractionSchema = createInteractionSchema.partial();

export type CreateInteractionDto = z.infer<typeof createInteractionSchema>;
export type UpdateInteractionDto = z.infer<typeof updateInteractionSchema>;
