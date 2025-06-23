import { Router } from 'express';
import { recommendationController } from './recommendation.controller';

const router = Router();

router.get('/', recommendationController.getAll);

export default router;
