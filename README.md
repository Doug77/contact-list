
# Contact-List

Neste projeto foi desenvolvido uma aplicação CRUD Full-Stack de contatos. 
Utilizando ReactJs no Front-end e NodeJs no Back-end, seguindo a arquitetura de camadas Models, Controllers e Services.

O usuario criando sua nova conta, poderá adicionar, remover, atualizar, deletar e filtrar contatos da sua lista.


## Funcionalidades

#### Front-End
- Realizar Login ou criar novas contas.
- Listar todos os contatos registrados no banco de dados.
- Criar novos contatos inserindo Nome, Número e E-mail.
- Editar qualquer um dos seus contatos.
- Excluir qualquer um dos seus contatos.

#### Back-end
- Autenticação de usuário com JWT.
- Validação de Token JWT.
- End-points '/user' para realizar login com E-mail e Senha registrados no banco de dados.
```
    /user/login
```
- End-points '/user' para criar nova conta E-mail e Senha.

```
    /user/register
```


## Stack utilizada

**Front-end:** React, CSS3,React Hooks, Axios, react-router-dom, Docker.

**Back-end:** Node, Express, Sequelize, MYSQL, JWT, Joi, Bcrypt, Docker.


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

#### No Front-End
`REACT_APP_API_LINK`

#### No Back-End
`MYSQL_USER`
`MYSQL_PASSWORD`
`HOSTNAME`
`PORT_DB`
`PORT`
`JWT`


## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:Doug77/contact-list.git
```

Entre no diretório front-end do projeto

```bash
  cd contact-list/src/frontend
```

Instale as dependências

```bash
  npm install
```

Entre no diretório back-end do projeto

```bash
  cd contact-list/src/backend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor frontend e backend

```bash
  npm start
```

## Rodando com Docker 

Ceritfique-se de ter o [Docker](https://www.docker.com/) instalado e rodando na sua máquina.

Clone o projeto

```bash
  git clone git@github.com:Doug77/contact-list.git
```

Entre no diretório raiz do projeto

```bash
  cd contact-list
```

Inicie o Docker Compose 

```bash
  docker-compose up
```

Para finalizar o Docker Compose 

```bash
  docker-compose down
```


