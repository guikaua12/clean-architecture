import {ICreateUserDTO} from '../dtos/ICreateUserDTO';
import {User} from '../models/User';

export interface IUserRepository {
    create({email, password}: ICreateUserDTO): Promise<User>;
    findByEmail(email: string) : Promise<User | null>;
}