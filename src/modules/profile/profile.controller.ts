import { Request, Response } from 'express'
import { profileService } from './profile.service'

export const profileController = {
  getAll: async (req: Request, res: Response) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined
    const profiles = await profileService.getAll(limit)
    res.status(200).json(profiles)
  },

  getById: async (req: Request, res: Response) => {
    const id = req.params.id
    const profile = await profileService.getById(id)

    if (!profile) {
      res.status(404).json({ message: 'Perfil no encontrado' })
      return
    }

    res.status(200).json(profile)
  },

  create: async (req: Request, res: Response) => {
    const profile = await profileService.create(req.body)
    res.status(201).json(profile)
  },

  update: async (req: Request, res: Response) => {
    const id = req.params.id
    const data = req.body
    const updatedProfile = await profileService.update(id, data)

    if (!updatedProfile) {
      res.status(404).json({ message: 'Perfil no encontrado' })
      return
    }

    res.status(200).json(updatedProfile)
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params.id
    const deletedProfile = await profileService.delete(id)

    if (!deletedProfile) {
      res.status(404).json({ message: 'Perfil no encontrado' })
      return
    }

    res.status(204).send()
  },
}
