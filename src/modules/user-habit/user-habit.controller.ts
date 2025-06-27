import { Request, Response } from 'express';
import { userHabitService } from './user-habit.service';

export const userHabitController = {
  getAll: async (req: Request, res: Response) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;
    const userHabits = await userHabitService.getAll(limit);
    res.json(userHabits);
  },
};
