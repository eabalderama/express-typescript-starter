import { Router } from 'express';
import { store } from './user.controller';

const UserRouter = Router();

UserRouter.post('/', store);

export default UserRouter;
