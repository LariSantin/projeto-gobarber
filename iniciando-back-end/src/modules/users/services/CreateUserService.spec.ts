import AppError from '@shared/errors/AppError';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const hashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(fakeUsersRepository, hashProvider);
    const user = await createUser.execute({
      email: 'lari_santin@hotmail.com',
      name: 'Larissa',
      password: '23422',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const hashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(fakeUsersRepository, hashProvider);
    await createUser.execute({
      email: 'lari_santin@hotmail.com',
      name: 'Larissa',
      password: '23422',
    });

    expect(
      createUser.execute({
        email: 'lari_santin@hotmail.com',
        name: 'Larissa',
        password: '23422',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
