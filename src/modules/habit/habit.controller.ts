import { Request, Response } from 'express';
import { habitService } from './habit.service';

export const habitController = {
  getAll: async (req: Request, res: Response) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;
    const habits = await habitService.getAll(limit);
    res.status(200).json(habits);
  },

  getById: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const habit = await habitService.getById(id);
    if (!habit) {
      res.status(404).json({ message: 'Hábito no encontrado' });
      return;
    }
    res.status(200).json(habit);
  },

  createHabit: async (req: Request, res: Response) => {
    const habit = await habitService.createHabit(req.body);
    res.status(201).json(habit);
  },

  updateHabit: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const updated = await habitService.updateHabit(id, req.body);
      res.status(200).json(updated);
    } catch (e) {
      res.status(404).json({ message: 'Hábito no encontrado' });
    }
  },

  deleteHabit: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await habitService.deleteHabit(id);
      res.status(204).send();
    } catch (e) {
      res.status(404).json({ message: 'Hábito no encontrado' });
    }
  },

  countHabits: async (_req: Request, res: Response) => {
    const count = await habitService.count();
    res.status(200).json({ count });
  }
};