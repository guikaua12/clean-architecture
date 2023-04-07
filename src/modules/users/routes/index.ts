import {Request, Response, Router} from 'express';
import {createUserFactory} from '../factory/createUserFactory';

const userRouter = Router();

// create user
userRouter.post('/', (req: Request, res: Response) => {
    createUserFactory().handle(req, res)
});

export {userRouter};