const express = require('express');
const bodyParser = require('body-parser');
const { config } = require('dotenv');
const { sequelize } = require('../models');
const errorHandler = require('../middlewares/errorHandler');
const router = require('../routes/router');

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Importar rotas
const userRoutes = require('../routes/users');
const directorRoutes = require('../routes/directors');

// Usar rotas
app.use('/users', userRoutes);
app.use('/directors', directorRoutes);

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
