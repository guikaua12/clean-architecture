import {Request, Response} from 'express';
import {CreateUserUseCase} from '../useCases/createUser/createUserUseCase';
import {createUserFactory} from '../factory/createUserFactory';

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}
    async handle(req: Request, res: Response) {

        const {email, password} = req.body;

        const user = await this.createUserUseCase.execute({email, password});

        res.status(201).json({
            user
        });

    }
}