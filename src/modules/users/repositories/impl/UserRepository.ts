import {IUserRepository} from '../IUserRepository';
import {ICreateUserDTO} from '../../dtos/ICreateUserDTO';
import {User} from '../../models/User';

export class UserRepository implements IUserRepository {
    async create({email, password}: ICreateUserDTO): Promise<User> {
        return Promise.resolve(undefined);
    }

}