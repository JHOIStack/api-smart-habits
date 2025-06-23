import { Request, Response } from 'express';
import { profileService } from './profile.service';

export const profileController = {
  getAll: async (_req: Request, res: Response) => {
    const profiles = await profileService.getAll();
    res.json(profiles);
  },
};
