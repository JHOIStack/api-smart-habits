import { Router } from 'express';
import { profileController } from './profile.controller';

const router = Router();

router.get('/', profileController.getAll);
router.get('/:id', profileController.getById);
router.post('/', profileController.create);
router.put('/:id', profileController.update);
router.delete('/:id', profileController.delete);

export default router;
