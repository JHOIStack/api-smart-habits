import { Request, Response } from 'express';
import { statService } from './stats.service';

export const statsController = {
  getTotals: async (_req: Request, res: Response) => {
    const totals = await statService.getTotals();
    res.status(200).json(totals);
  },
};
