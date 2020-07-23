import AppError from '@shared/errors/AppError';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let hashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    hashProvider = new FakeHashProvider();
    createUser = new CreateUserService(fakeUsersRepository, hashProvider);
  });
  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      email: 'lari_santin@hotmail.com',
      name: 'Larissa',
      password: '23422',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    await createUser.execute({
      email: 'lari_santin@hotmail.com',
      name: 'Larissa',
      password: '23422',
    });

    await expect(
      createUser.execute({
        email: 'lari_santin@hotmail.com',
        name: 'Larissa',
        password: '23422',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
