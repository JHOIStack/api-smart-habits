import { Router } from 'express';
import { interactionController } from './interaction.controller';

const router = Router();

router.get('/', interactionController.getAll);

export default router;
