import { Router } from 'express';
import { habitController } from './habit.controller';

const router = Router();

router.get('/', habitController.getAll);
router.get('/count', habitController.countHabits);
router.get('/:id', habitController.getById);
router.post('/', habitController.createHabit);
router.put('/:id', habitController.updateHabit);
router.delete('/:id', habitController.deleteHabit);

export default router;