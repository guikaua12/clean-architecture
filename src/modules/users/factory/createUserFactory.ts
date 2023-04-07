import {CreateUserController} from '../controllers/createUserController';
import {UserRepository} from '../repositories/impl/UserRepository';
import {CreateUserUseCase} from '../useCases/createUser/createUserUseCase';

export function createUserFactory(): CreateUserController {
    const userRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);
    const createUserController = new CreateUserController(createUserUseCase);

    return createUserController;
}