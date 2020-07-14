# Projeto GoBarber

Projeto GoBarber é um aplicação de agendamento que tem a versão web e mobile.

## Funcionalidades:
 #### Recuperação de senha
    *Requisitos funcionais*
        - O usuário deve poder recuperar sua senha informando o seu e-mail;
        - O usuário deve receber um e-mail com instruções de recuperação de senha;
        - O usuário deve poder resetar sua senha.

    *Requisitos não funcionais*
        - Utilizar Mailtrap para testar envios em ambiente dev;
        - Utilizar Amazon SES para envios em produção;
        - O envio de e-mail deve acontecer em segundo plano (background job); 

    *Regras de negócios*
        - O link enviado por email para resetar senha, deve expirar em 2h;
        - O usuário precisa confirmar a nova senha ao resetar sua senha;

#### Atualização do perfil
    *Requisitos funcionais*
        - O usuário deve poder atualizar seu nome, email e senha;

    *Regras de negócios*
        - O usuário não pode alterar seu e-mail para um e-mail já utilizado;
        - Para atualizar sua senha, o usuário deve informar a senha antiga;
        - Para atualizar sua senha, o usuário precisa confirmar a nova senha;
    
#### Painel do prestador
    *Requisitos funcionais*
        - O usuário deve poder listar seus agendamentos de um dia específico;
        - O prestador deve receber uma notificação sempre que houver um novo agendamento;
        - O prestador deve poder visualizar as notificação não lidas;

    *Requisitos não funcionais*
        - Os agendamentos do prestador do dia devem ser armazenados em cache;
        - As notificações do prestador devem ser armazenadas no mongoDB;
        - As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

    *Regras de negócios*
        - A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

#### Agendamento de serviços
    *Requisitos funcionais*
        - O usuário deve poder listar todos prestadores de serviço cadastrados;
        - O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
        - O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
        - O usuário deve poder realizar um novo agendamento com um prestador;

    *Requisitos não funcionais*
        - A listagem de prestadores deve ser armazenada em cache;

    *Regras de negócios*
        - Cada agendamento deve durar 1h exatamente;
        - Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
        - O usuário não pode agendar em um horário já ocupado;
        - O usuário não pode agendar em um horário que já passou;
        - O usuário não pode agendar serviços consigo mesmo;

## Back-end:

Tecnologias:
- Uuidv4
- Express
- TypeOrm
- Multer
- BCrypt
- JWT
- Date-fns

Para executar o projeto:
```
yarn dev:server
```

## Front-end

Tecnologias:
- React Router
- Styled component
- Unform
- Axios
- Yup

para executar:
```
yarn start
```


## Mobile

Algumas tecnologias utilizadas na web também são utilizadas no mobile. 

Para executar:
```
npx react-native run-android

yarn start
```
