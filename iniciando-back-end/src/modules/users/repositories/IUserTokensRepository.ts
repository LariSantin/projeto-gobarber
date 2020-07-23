import UserTokens from '../infra/typeorm/entities/UserTokens';

export default interface IUserTokenssRepository {
  generate(user_id: string): Promise<UserTokens>;
  findByToken(token: string): Promise<UserTokens | undefined>;
}
