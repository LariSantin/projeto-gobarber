"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  jwt: {
    secret: process.env.APP_SECRET || 'default',
    expiresIn: '1d' // dias que o usuário pode ficar logado

  }
};
exports.default = _default;