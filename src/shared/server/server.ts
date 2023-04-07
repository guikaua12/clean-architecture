import 'express-async-errors';
import express, {Request, Response, NextFunction} from 'express';
import {router} from '../routes';
import {AppError} from '../errors/AppError';


const server = express();
server.use(express.json());
server.use(router);

// error handling
server.use((err: any , req: Request, res: Response, next: NextFunction) => {
    if(err instanceof AppError) {
        return res.status(err.status).json({message: err.message});
    }

    res.status(500).json({message: 'Internal Server Error'});
});

export {server};
