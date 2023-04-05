import {IUserRepository} from '../IUserRepository';
import {ICreateUserDTO} from '../../dtos/ICreateUserDTO';
import {User} from '../../models/User';
import {User as UserModel} from '../../database/models/User';

export class UserRepository implements IUserRepository {
    async create({email, password}: ICreateUserDTO): Promise<User> {
        const user = new UserModel({
            email,
            password
        });

        await user.save();

        return {email, password} as User;
    }

}