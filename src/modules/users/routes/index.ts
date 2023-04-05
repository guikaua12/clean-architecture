import {Router} from 'express';
import {CreateUserController} from '../controllers/createUserController';

const userRouter = Router();


// create user
const createUserController = new CreateUserController();
userRouter.post('/create', createUserController.handle);

export {userRouter};