import {IUserRepository} from '../IUserRepository';
import {ICreateUserDTO} from '../../dtos/ICreateUserDTO';
import {User} from '../../models/User';
import {UserModel} from '../../database/models/User';
import {IUpdateUserDTO} from '../../dtos/IUpdateUserDTO';

export class UserRepository implements IUserRepository {
    async create({email, password}: ICreateUserDTO): Promise<User> {
        const user = new UserModel({
            email,
            password
        });

        await user.save();

        return {id: user._id.toString(), email, password} as User;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await UserModel.findOne({
            email
        });

        if(!user) return null;

        return user.toObject();
    }

    async update(data: IUpdateUserDTO): Promise<User | null> {
        const user = UserModel.findByIdAndUpdate(data.id, {
            $set: {
                email: data.email,
                password: data.password
            }
        }, {
            new: true
        });

        return user || null;
    }

}