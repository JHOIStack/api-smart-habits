import { Request, Response } from 'express';
import { interactionService } from './interaction.service';

export const interactionController = {
  getAll: async (req: Request, res: Response) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;
    const interactions = await interactionService.getAll(limit);
    res.status(200).json(interactions);
  },

  getById: async (req: Request, res: Response) => {
    const id = req.params.id;
    const interaction = await interactionService.getById(id);

    if (!interaction) {
      res.status(404).json({ message: 'Interacción no encontrada' });
      return;
    }

    res.status(200).json(interaction);
  },

  create: async (req: Request, res: Response) => {
    const interaction = await interactionService.create(req.body);
    res.status(201).json(interaction);
  },

  update: async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const updated = await interactionService.update(id, data);

    if (!updated) {
      res.status(404).json({ message: 'Interacción no encontrada' });
      return;
    }

    res.status(200).json(updated);
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params.id;
    const deleted = await interactionService.delete(id);

    if (!deleted) {
      res.status(404).json({ message: 'Interacción no encontrada' });
      return;
    }

    res.status(204).send();
  },
};
