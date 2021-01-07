export default {
  jwt: {
    secret: process.env.APP_SECRET || 'default',
    expiresIn: '1d', // dias que o usuário pode ficar logado
  },
};
