import { Router } from 'express';
import { habitController } from './habit.controller';

const router = Router();

router.get('/', habitController.getAll);

export default router;
