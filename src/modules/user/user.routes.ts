import { Router } from 'express';
import { userController } from './user.controller';
import { validate } from '../../middlewares/validate';
import { userIdSchema, createUserSchema } from './user.schema';

const router = Router();

router.get('/', userController.getAll);
router.get('/:id', validate(userIdSchema, 'params'), userController.getById);
router.post('/', validate(createUserSchema), userController.create);

export default router;
