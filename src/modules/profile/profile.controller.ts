import { Request, Response } from 'express';
import { profileService } from './profile.service';

export const profileController = {
  getAll: async (req: Request, res: Response) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;
    const profiles = await profileService.getAll(limit);
    res.json(profiles);
  },
};
