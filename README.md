# Running Neon database migrations using Sequelize


## Autor
- Andrey Kaiky Reis Ferreira

## Como rodar localmente

Você precisará dos seguintes itens:
- Uma conta no [Neon](https://neon.tech) e um projeto
- Node.js e npm

1. Faça o clone do repositório: 
```bash
git clone https://github.com/JovemKA/express-sequelize-neon.git
```

2. Navegue até o repositório do projeto e instale as depedências:
```bash
cd express-sequelize-neon/
npm install
```

3. Crie um arquivo `.env` na raiz do projeto e configure suas variáveis de ambiente:
```bash
DATABASE_URL=
PORT=
```

4. Execute as migrações do banco de dados:
```bash
npx sequelize db:migrate
```

5. Adicione algumas entradas ao banco de dados executando o script de seed.
```bash
node src/seeders/seed.js
```

6. Inicie o servidor.
```bash
npm start
```

## Como usar as rotas

1. Digite no postman (ou qualquer outro software que teste endpoints): 
```bash
# Get a specific user by id
http://localhost:porta_que_escolheu/users/:id

# Get a list of users/directors/films/reviews
http://localhost:porta_que_escolheu/users
http://localhost:porta_que_escolheu/directors
http://localhost:porta_que_escolheu/films
http://localhost:porta_que_escolheu/reviews

# Create new users/directors/films/reviews
http://localhost:porta_que_escolheu/users
http://localhost:porta_que_escolheu/directors
http://localhost:porta_que_escolheu/films
http://localhost:porta_que_escolheu/reviews

# Uptade a specific user/director/film/review by id
http://localhost:porta_que_escolheu/users/:id
http://localhost:porta_que_escolheu/directors/:id
http://localhost:porta_que_escolheu/films/:id
http://localhost:porta_que_escolheu/reviews/:id

# Delete a user/director/film/review by id
http://localhost:porta_que_escolheu/users/:id
http://localhost:porta_que_escolheu/directors/:id
http://localhost:porta_que_escolheu/films/:id
http://localhost:porta_que_escolheu/reviews/:id
```
