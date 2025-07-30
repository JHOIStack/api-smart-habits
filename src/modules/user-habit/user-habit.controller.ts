import { Request, Response } from 'express'
import { userHabitService } from './user-habit.service'

export const userHabitController = {
  getAll: async (req: Request, res: Response) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined
    const userHabits = await userHabitService.getAll(limit)
    res.status(200).json(userHabits)
  },

  getById: async (req: Request, res: Response) => {
    const id = req.params.id
    const userHabit = await userHabitService.getById(id)

    if (!userHabit) {
      res.status(404).json({ message: 'UserHabit no encontrado' })
      return
    }

    res.status(200).json(userHabit)
  },

  getByUserId: async (req: Request, res: Response) => {
    const userId = req.params.userId
    const userHabits = await userHabitService.getByUserId(userId)
    
    res.status(200).json(userHabits)
  },

  create: async (req: Request, res: Response) => {
    const userHabit = await userHabitService.create(req.body)
    res.status(201).json(userHabit)
  },

  update: async (req: Request, res: Response) => {
    const id = req.params.id
    const data = req.body
    const updated = await userHabitService.update(id, data)

    if (!updated) {
      res.status(404).json({ message: 'UserHabit no encontrado' })
      return
    }

    res.status(200).json(updated)
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params.id
    const deleted = await userHabitService.delete(id)

    if (!deleted) {
      res.status(404).json({ message: 'UserHabit no encontrado' })
      return
    }

    res.status(204).send()
  },
}
