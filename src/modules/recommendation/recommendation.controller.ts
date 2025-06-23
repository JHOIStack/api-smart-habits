import { Request, Response } from 'express';
import { recommendationService } from './recommendation.service';

export const recommendationController = {
  getAll: async (_req: Request, res: Response) => {
    const recommendations = await recommendationService.getAll();
    res.json(recommendations);
  },
};
