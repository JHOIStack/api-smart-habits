import { Request, Response } from 'express';
import { habitService } from './habit.service';

export const habitController = {
  getAll: async (_req: Request, res: Response) => {
    const habits = await habitService.getAll();
    res.json(habits);
  },
};
