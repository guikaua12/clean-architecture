import {beforeEach, describe, expect, it} from '@jest/globals';
import {IUserRepository} from '../../repositories/IUserRepository';
import {CreateUserUseCase} from './createUserUseCase';
import {MemoryUserRepository} from '../../repositories/impl/MemoryUserRepository';
import {ICreateUserDTO} from '../../dtos/ICreateUserDTO';

describe('create user usecase',  () => {
    let userRepository: IUserRepository;
    let createUserUseCase: CreateUserUseCase;

    beforeEach( () => {
        userRepository = new MemoryUserRepository();
        createUserUseCase = new CreateUserUseCase(userRepository);
    });

    it('should be able to create a user', async () => {
        const createUserDTO: ICreateUserDTO = {
            email: 'test@test.com',
            password: 'testpassword'
        };

        const user = await createUserUseCase.execute(createUserDTO);

        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('password');
    });

    it('should not be able to create a existing user', async () => {
        const createUserDTO: ICreateUserDTO = {
            email: 'testexisting@test.com',
            password: 'testexistingpassword'
        };

        await createUserUseCase.execute(createUserDTO);

        await expect(createUserUseCase.execute(createUserDTO))
            .rejects
            .toThrow('User already exists')
    });

    it('should not be able to create a user if missing parameters', async () => {
        const createUserDTO: ICreateUserDTO = {
            email: '',
            password: ''
        };

        await expect(createUserUseCase.execute(createUserDTO))
            .rejects
            .toThrow('Missing parameters');
    });


});