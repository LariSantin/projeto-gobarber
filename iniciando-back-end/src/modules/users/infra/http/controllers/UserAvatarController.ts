import { Request, Response } from 'express';

import UpdateUserAvatar from '@modules/users/services/UpdateUserAvatarService';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();
    const updateUserAvatar = new UpdateUserAvatar(usersRepository);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  }
}
