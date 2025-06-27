import { Router } from 'express';
import { userHabitController } from './user-habit.controller';

const router = Router();

router.get('/', userHabitController.getAll);
router.get('/:id', userHabitController.getById);
router.post('/', userHabitController.create);
router.put('/:id', userHabitController.update);
router.delete('/:id', userHabitController.delete);

export default router;
