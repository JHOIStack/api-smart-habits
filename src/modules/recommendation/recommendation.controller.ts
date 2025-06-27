import { Request, Response } from 'express'
import { recommendationService } from './recommendation.service'

export const recommendationController = {
  getAll: async (req: Request, res: Response) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined
    const recommendations = await recommendationService.getAll(limit)
    res.status(200).json(recommendations)
  },

  getById: async (req: Request, res: Response) => {
    const id = req.params.id
    const recommendation = await recommendationService.getById(id)

    if (!recommendation) {
      res.status(404).json({ message: 'Recomendación no encontrada' })
      return
    }

    res.status(200).json(recommendation)
  },

  create: async (req: Request, res: Response) => {
    const recommendation = await recommendationService.create(req.body)
    res.status(201).json(recommendation)
  },

  update: async (req: Request, res: Response) => {
    const id = req.params.id
    const data = req.body
    const updated = await recommendationService.update(id, data)

    if (!updated) {
      res.status(404).json({ message: 'Recomendación no encontrada' })
      return
    }

    res.status(200).json(updated)
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params.id
    const deleted = await recommendationService.delete(id)

    if (!deleted) {
      res.status(404).json({ message: 'Recomendación no encontrada' })
      return
    }

    res.status(204).send()
  },
}
