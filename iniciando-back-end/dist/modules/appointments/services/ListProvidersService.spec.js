"use strict";

var _FakeCacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider"));

var _FakeUsersRepository = _interopRequireDefault(require("../../users/repositories/fakes/FakeUsersRepository"));

var _ListProvidersService = _interopRequireDefault(require("./ListProvidersService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeUsersRepository;
let listProvider;
let fakeCacheProvider;
describe('ListProvider', () => {
  beforeEach(() => {
    fakeUsersRepository = new _FakeUsersRepository.default();
    fakeCacheProvider = new _FakeCacheProvider.default();
    listProvider = new _ListProvidersService.default(fakeUsersRepository, fakeCacheProvider);
  });
  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'John Trê',
      email: 'john@exemple.com',
      password: '123'
    });
    const user2 = await fakeUsersRepository.create({
      name: 'Maria Trê',
      email: 'maria@exemple.com',
      password: '13323'
    });
    const loggedUser = await fakeUsersRepository.create({
      name: 'Whind Trê',
      email: 'whind@exemple.com',
      password: '12663'
    });
    const providers = await listProvider.execute({
      user_id: loggedUser.id
    });
    expect(providers).toEqual([user1, user2]);
  });
});