import { Router } from 'express';
import { userController } from './user.controller';
import { validate } from '../../middlewares/validate';
import { userIdSchema, createUserSchema, updateUserSchema } from './user.schema';

const router = Router();

router.get('/', userController.getAll);
router.get('/:id', validate(userIdSchema, 'params'), userController.getById);
router.post('/', validate(createUserSchema), userController.create);
router.put('/:id', validate(updateUserSchema), userController.update);
router.delete('/:id', validate(userIdSchema, 'params'), userController.delete);
export default router;
