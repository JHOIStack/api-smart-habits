import { Router } from 'express';
import { userHabitController } from './user-habit.controller';

const router = Router();

router.get('/', userHabitController.getAll);

export default router;
