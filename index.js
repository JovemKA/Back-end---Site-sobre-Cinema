const express = require('express');
const bodyParser = require('body-parser');
const { config } = require('dotenv');
const { Sequelize, DataTypes } = require('sequelize');
const errorHandler = require('./middlewares/errorHandler');
const router = require('./routes/router');

config();

const app = express();
const port = process.env.PORT || 3000;

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: { ssl: { require: true } }
});

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   }
// });

const User = require('./models/user')(sequelize, DataTypes);
const Director = require('./models/director')(sequelize, DataTypes);
// const Film = require('./models/film')(sequelize, DataTypes);
// const Review = require('./models/review')(sequelize, DataTypes);

app.use(bodyParser.json());

// Importar rotas
const userRoutes = require('./routes/users');
const directorRoutes = require('./routes/directors');

// Usar rotas
app.use('/users', userRoutes);
app.use('/directors', directorRoutes);

// app.use('/', router); // Usar rotas unificadas

// Middleware de tratamento de erros
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
