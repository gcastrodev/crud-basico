# User CRUD API - Node.js + Express + Prisma

API RESTful simples para gerenciamento de usuarios, desenvolvida para praticar fundamentos de backend com Node.js.

## Highlights

- CRUD completo de usuarios (Create, Read, Update, Delete)
- API REST com `Express 5`
- Persistencia com `Prisma ORM`
- Banco de dados `MongoDB`
- Projeto focado em base solida de backend para evolucao futura

## Tech Stack

- Node.js
- Express
- Prisma
- MongoDB
- dotenv

## Estrutura do Projeto

```bash
.
├── prisma/
│   └── schema.prisma
├── server.js
├── package.json
└── .env
```

## Endpoints

### `GET /usuarios`
Lista todos os usuarios.

### `POST /usuarios`
Cria um novo usuario.

Body (JSON):

```json
{
  "name": "Gabriel Castro",
  "email": "gabriel@email.com",
  "age": 24
}
```

### `PUT /usuarios/:id`
Atualiza os dados de um usuario existente.

Body (JSON):

```json
{
  "name": "Gabriel Castro Atualizado",
  "email": "gabriel.atualizado@email.com",
  "age": 25
}
```

### `DELETE /usuarios/:id`
Remove um usuario pelo `id`.

## Como Rodar Localmente

### 1) Clone o repositorio

```bash
git clone <url-do-repositorio>
cd conceitos
```

### 2) Instale as dependencias

```bash
npm install
```

### 3) Configure as variaveis de ambiente

Crie um arquivo `.env` com:

```env
DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>/<database>?retryWrites=true&w=majority"
```

### 4) Gere o client do Prisma

```bash
npx prisma generate
```

### 5) Rode o projeto

```bash
npm run dev
```

Servidor padrao: `http://localhost:3000`

## Objetivo de Aprendizado

Este projeto demonstra a construcao de uma API Node.js com operacoes CRUD reais, modelagem com Prisma e integracao com banco NoSQL, reforcando fundamentos importantes para desenvolvimento backend profissional.

## Proximos Passos

- Validacao de dados com Zod ou Joi
- Tratamento centralizado de erros
- Separacao em camadas (routes, controllers, services)
- Testes automatizados
- Documentacao com Swagger/OpenAPI

---

Desenvolvido por Gabriel Castro.
