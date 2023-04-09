import {beforeEach, describe, expect, it} from '@jest/globals';
import {IUserRepository} from '../../repositories/IUserRepository';
import {IUpdateUserDTO} from '../../dtos/IUpdateUserDTO';
import {MemoryUserRepository} from '../../repositories/impl/MemoryUserRepository';
import {UpdateUserUseCase} from './UpdateUserUseCase';
import {ICreateUserDTO} from '../../dtos/ICreateUserDTO';
import {CreateUserUseCase} from '../createUser/createUserUseCase';

describe('update user usecase',  () => {
    let userRepository: IUserRepository;
    let createUserUseCase: CreateUserUseCase;
    let updateUserUseCase: UpdateUserUseCase;

    beforeEach( () => {
        userRepository = new MemoryUserRepository();
        createUserUseCase = new CreateUserUseCase(userRepository);
        updateUserUseCase = new UpdateUserUseCase(userRepository);
    });

    it('should be able to update a user', async () => {
        const createUserDTO: ICreateUserDTO = {
            email: 'test@test.com',
            password: 'test'
        }
        const user = await createUserUseCase.execute(createUserDTO);

        const updateUserDTO: IUpdateUserDTO = {
            id: user.id,
            email: 'testnewemail@test.com',
            password: 'testnewpassword'
        };

        const updatedUser = await updateUserUseCase.execute(updateUserDTO);



        expect(updatedUser).toHaveProperty('id');
        expect(updatedUser).toHaveProperty('email');
        expect(updatedUser).toHaveProperty('password');

        expect(updatedUser?.email).toEqual(updateUserDTO.email);
        expect(updatedUser?.password).toEqual(updateUserDTO.password);
    });

    it('should not be able to update if missing parameters', async () => {
        const updateUserDTO: IUpdateUserDTO = {
            id: '',
            email: 'testnewemail@test.com',
            password: 'testnewpassword'
        };

        await expect(updateUserUseCase.execute(updateUserDTO))
            .rejects
            .toThrow('Missing parameters')
    });

    it('should not be able to update a not existing user', async () => {
        const updateUserDTO: IUpdateUserDTO = {
            id: 'id',
            email: 'testnewemail@test.com',
            password: 'testnewpassword'
        };

        await expect(updateUserUseCase.execute(updateUserDTO))
            .rejects
            .toThrow('User does not exist')
    });


});