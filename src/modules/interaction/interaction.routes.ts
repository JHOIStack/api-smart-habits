import { Router } from 'express';
import { interactionController } from './interaction.controller';

const router = Router();

router.get('/', interactionController.getAll);
router.get('/:id', interactionController.getById);
router.post('/', interactionController.create);
router.put('/:id', interactionController.update);
router.delete('/:id', interactionController.delete);

export default router;
