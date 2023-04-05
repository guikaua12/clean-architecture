import {Router} from 'express';
import {userRouter} from '../modules/users/routes/'

const router = Router();

router.use('/users', userRouter);

export {router};