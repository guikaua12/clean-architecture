import {ICreateUserDTO} from '../../dtos/ICreateUserDTO';
import {IUserRepository} from '../../repositories/IUserRepository';
import {User} from '../../models/User';

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {
    }

    async execute({email, password}: ICreateUserDTO): Promise<User | null> {
        const userExists = await this.userRepository.findByEmail(email);

        if(userExists) throw new Error('User already exists.');

        return await this.userRepository.create({email, password});
    }
}