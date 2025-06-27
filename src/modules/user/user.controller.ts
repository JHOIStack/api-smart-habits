import { Request, Response } from 'express';
import { userService } from './user.service';
import { PassThrough } from 'stream';

export const userController = {
  getAll: async (req: Request, res: Response) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;
    const users = await userService.getAll(limit);
    res.status(200).json(users);
  },

  getById: async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const user = await userService.getById(id);

    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    res.status(200).json(user);
  },

  create: async (req: Request, res: Response): Promise<void> => {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  },

  update: async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const userData = req.body;
    const updatedUser = await userService.updateUser(id, userData);

    if (!updatedUser) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    res.status(200).json(updatedUser);
  },

  delete: async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const deletedUser = await userService.deleteUser(id);

    if (!deletedUser) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    res.status(204).send();
  },
};
