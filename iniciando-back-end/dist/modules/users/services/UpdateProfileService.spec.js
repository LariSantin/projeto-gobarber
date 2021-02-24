"use strict";

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _FakeHashProvider = _interopRequireDefault(require("../providers/HashProvider/fakes/FakeHashProvider"));

var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));

var _UpdateProfileService = _interopRequireDefault(require("./UpdateProfileService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeUsersRepository;
let fakeHashProvider;
let updateProfile;
describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new _FakeUsersRepository.default();
    fakeHashProvider = new _FakeHashProvider.default();
    updateProfile = new _UpdateProfileService.default(fakeUsersRepository, fakeHashProvider);
  });
  it('should be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Larissa',
      email: 'lari_santin@hotmail.com',
      password: '123'
    });
    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Trê',
      email: 'john@exemple.com'
    });
    expect(updatedUser.name).toBe('John Trê');
    expect(updatedUser.email).toBe('john@exemple.com');
  });
  it('should not be able to change to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'Larissa',
      email: 'lari_santin@hotmail.com',
      password: '123'
    });
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@hotmail.com',
      password: '12345'
    });
    await expect(updateProfile.execute({
      user_id: user.id,
      name: 'larissa',
      email: 'lari_santin@hotmail.com'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Larissa',
      email: 'lari_santin@hotmail.com',
      password: '123'
    });
    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Trê',
      email: 'john@exemple.com',
      old_password: '123',
      password: '4321'
    });
    expect(updatedUser.password).toBe('4321');
  });
  it('should not be able to update the password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Larissa',
      email: 'lari_santin@hotmail.com',
      password: '123'
    });
    await expect(updateProfile.execute({
      user_id: user.id,
      name: 'John Trê',
      email: 'john@exemple.com',
      password: '4321'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Larissa',
      email: 'lari_santin@hotmail.com',
      password: '123'
    });
    await expect(updateProfile.execute({
      user_id: user.id,
      name: 'John Trê',
      email: 'john@exemple.com',
      old_password: 'wrong-password',
      password: '4321'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to update the profile from non-existing user', async () => {
    await expect(updateProfile.execute({
      user_id: 'non-existing-user-id',
      name: 'Test',
      email: 'test@exemple.com'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});