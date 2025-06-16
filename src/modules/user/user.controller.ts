import { Request, Response } from 'express';
import { userService } from './user.service';

export const userController = {
  getAll: async (_req: Request, res: Response) => {
    const users = await userService.getAll();
    res.json(users);
  },

  getById: async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const user = await userService.getById(id);

    if (!user) {
      res.status(404).json({ message: 'Not Found' });
      return;
    }

    res.json(user);
  },
};
