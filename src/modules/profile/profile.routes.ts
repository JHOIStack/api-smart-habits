import { Router } from 'express';
import { profileController } from './profile.controller';

const router = Router();

router.get('/', profileController.getAll);

export default router;
