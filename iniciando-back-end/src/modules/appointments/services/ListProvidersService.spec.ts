// import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProviderService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProvider: ListProviderService;

describe('ListProvider', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProvider = new ListProviderService(fakeUsersRepository);
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'John Trê',
      email: 'john@exemple.com',
      password: '123',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Maria Trê',
      email: 'maria@exemple.com',
      password: '13323',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Whind Trê',
      email: 'whind@exemple.com',
      password: '12663',
    });

    const providers = await listProvider.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
