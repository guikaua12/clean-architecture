import {IUserRepository} from '../IUserRepository';
import {ICreateUserDTO} from '../../dtos/ICreateUserDTO';
import {User} from '../../models/User';
import {v4 as uuid} from 'uuid';
import {IUpdateUserDTO} from '../../dtos/IUpdateUserDTO';

export class MemoryUserRepository implements IUserRepository {
    private readonly users: User[] = [];
    async create({email, password}: ICreateUserDTO): Promise<User> {
        const user: User = {id: uuid(), email, password};
        this.users.push(user);

        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = this.users.find(user => user.email === email);
        return user ? user : null;
    }

    async update(data: IUpdateUserDTO): Promise<User | null> {
        const user = this.users.find(user => user.id === data.id);

        if (!user) return null;

        user.email = data.email;
        user.password = data.password;
        return user;
    }

}