import {ICreateUserDTO} from '../dtos/ICreateUserDTO';
import {User} from '../models/User';
import {IUpdateUserDTO} from '../dtos/IUpdateUserDTO';

export interface IUserRepository {
    create(data: ICreateUserDTO): Promise<User>;
    findByEmail(email: string) : Promise<User | null>;
    update(data: IUpdateUserDTO): Promise<User | null>;
}