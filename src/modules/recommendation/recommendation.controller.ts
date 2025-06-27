import { Request, Response } from 'express';
import { recommendationService } from './recommendation.service';

export const recommendationController = {
  getAll: async (req: Request, res: Response) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;
    const recommendations = await recommendationService.getAll(limit);
    res.json(recommendations);
  },
};
