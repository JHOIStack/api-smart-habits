import { Router } from 'express';
import { recommendationController } from './recommendation.controller';

const router = Router();

router.get('/', recommendationController.getAll);
router.get('/:id', recommendationController.getById);
router.post('/', recommendationController.create);
router.put('/:id', recommendationController.update);
router.delete('/:id', recommendationController.delete);

export default router;
