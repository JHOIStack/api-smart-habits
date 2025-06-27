import { Request, Response } from 'express';
import { habitService } from './habit.service';

export const habitController = {
  getAll: async (req: Request, res: Response) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;
    const habits = await habitService.getAll(limit);
    res.status(200).json(habits);
  },

  countHabits: async (_req: Request, res: Response) => {
    const count = await habitService.count();
    res.status(200).json({ count });
  }
};
