import {Request, Response} from 'express';
import {CreateUserUseCase} from '../useCases/createUser/createUserUseCase';
import {UserRepository} from '../repositories/impl/UserRepository';

const userRepository = new UserRepository();

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const {email, password} = req.body;

        const createUserUseCase = new CreateUserUseCase(userRepository);
        const user = await createUserUseCase.execute({email, password});

        res.status(201).json({
            user
        });

    }
}