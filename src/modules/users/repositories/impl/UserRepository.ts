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

        return {id: user._id.toString(), email, password} as User;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await UserModel.findOne({
            email
        });

        if(!user) return null;


        const obj = user.toObject();
        console.log(obj)



        return null;
    }

}