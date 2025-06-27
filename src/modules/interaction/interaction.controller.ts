import { Request, Response } from 'express';
import { interactionService } from './interaction.service';

export const interactionController = {
  getAll: async (req: Request, res: Response) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;
    const interactions = await interactionService.getAll(limit);
    res.json(interactions);
  },
};
