import { Request, Response } from 'express';
import { userHabitService } from './user-habit.service';

export const userHabitController = {
  getAll: async (_req: Request, res: Response) => {
    const userHabits = await userHabitService.getAll();
    res.json(userHabits);
  },
};
