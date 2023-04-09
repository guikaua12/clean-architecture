import {IUserRepository} from '../../repositories/IUserRepository';
import {IUpdateUserDTO} from '../../dtos/IUpdateUserDTO';
import {User} from '../../models/User';
import {AppError} from '../../../../shared/errors/AppError';

export class UpdateUserUseCase {
    constructor(private userRepository: IUserRepository) {
    }

    async execute(data: IUpdateUserDTO): Promise<User | null> {
        if (!data.id || !data.email || !data.password) throw new AppError(422, 'Missing parameters');

        const user = await this.userRepository.update(data);

        if (!user) throw new AppError(404, 'User does not exist');

        return user;
    }
}