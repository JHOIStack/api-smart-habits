import { Request, Response } from 'express';
import { interactionService } from './interaction.service';

export const interactionController = {
  getAll: async (_req: Request, res: Response) => {
    const interactions = await interactionService.getAll();
    res.json(interactions);
  },
};
