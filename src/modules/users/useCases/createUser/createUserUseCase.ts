import {ICreateUserDTO} from '../../dtos/ICreateUserDTO';
import {IUserRepository} from '../../repositories/IUserRepository';
import {User} from '../../models/User';
import {AppError} from '../../../../shared/errors/AppError';

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {
    }

    async execute(data: ICreateUserDTO): Promise<User> {
        if(!data.email || !data.password) throw new AppError(422, 'Missing parameters');

        const userExists = await this.userRepository.findByEmail(data.email);

        if(userExists) throw new AppError(409, 'User already exists');

        return await this.userRepository.create(data);
    }
}