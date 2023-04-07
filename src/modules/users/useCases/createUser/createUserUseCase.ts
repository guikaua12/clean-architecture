import {ICreateUserDTO} from '../../dtos/ICreateUserDTO';
import {IUserRepository} from '../../repositories/IUserRepository';
import {User} from '../../models/User';
import {AppError} from '../../../../shared/errors/AppError';

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {
    }

    async execute({email, password}: ICreateUserDTO): Promise<User | null> {
        if(!email || !password) throw new AppError(422, 'Missing parameters');

        const userExists = await this.userRepository.findByEmail(email);

        if(userExists) throw new AppError(409, 'User already exists');

        return await this.userRepository.create({email, password});
    }
}